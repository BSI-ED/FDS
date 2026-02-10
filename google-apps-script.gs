// ========== SCRIPT GOOGLE APPS SCRIPT POUR COMPTEUR SYNCHRONISÉ ==========
// Ce script doit être déployé sur Google Apps Script et lié à une Google Sheet

// Instructions d'installation :
// 1. Créez une nouvelle Google Sheet : https://sheets.google.com
// 2. Nommez-la "Compteur Visites Assistant IA"
// 3. Dans la Sheet, allez dans Extensions > Apps Script
// 4. Copiez-collez ce code
// 5. Cliquez sur "Déployer" > "Nouvelle version"
// 6. Type : "Application Web"
// 7. Exécuter en tant que : "Moi"
// 8. Qui a accès : "Tout le monde"
// 9. Copiez l'URL fournie et collez-la dans le fichier HTML (variable CLOUD_API_URL)

function doGet(e) {
  const action = e.parameter.action;
  
  if (action === 'getCount') {
    return getVisitCount();
  }
  
  return ContentService.createTextOutput(JSON.stringify({
    error: 'Action non reconnue'
  })).setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    if (data.action === 'increment') {
      return incrementVisitCounter(data.data);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: 'Action non reconnue'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      success: false,
      error: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function getVisitCount() {
  const sheet = getOrCreateSheet();
  const counterCell = sheet.getRange('A1');
  const firstVisitCell = sheet.getRange('B1');
  const lastVisitCell = sheet.getRange('C1');
  
  let count = counterCell.getValue() || 0;
  let firstVisit = firstVisitCell.getValue() || new Date().toISOString();
  let lastVisit = lastVisitCell.getValue() || new Date().toISOString();
  
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    count: count,
    firstVisit: firstVisit,
    lastVisit: lastVisit
  })).setMimeType(ContentService.MimeType.JSON);
}

function incrementVisitCounter(visitData) {
  const sheet = getOrCreateSheet();
  const logSheet = getOrCreateLogSheet();
  
  // Incrémenter le compteur
  const counterCell = sheet.getRange('A1');
  let count = counterCell.getValue() || 0;
  count++;
  counterCell.setValue(count);
  
  // Mettre à jour la première visite si nécessaire
  const firstVisitCell = sheet.getRange('B1');
  if (!firstVisitCell.getValue()) {
    firstVisitCell.setValue(visitData.timestamp);
  }
  
  // Mettre à jour la dernière visite
  const lastVisitCell = sheet.getRange('C1');
  lastVisitCell.setValue(visitData.timestamp);
  
  // Logger la visite détaillée
  logVisit(logSheet, count, visitData);
  
  return ContentService.createTextOutput(JSON.stringify({
    success: true,
    count: count,
    message: 'Visite enregistrée'
  })).setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Compteur');
  
  if (!sheet) {
    sheet = ss.insertSheet('Compteur');
    // Initialiser les en-têtes
    sheet.getRange('A1').setValue(0); // Compteur
    sheet.getRange('B1').setValue(''); // Première visite
    sheet.getRange('C1').setValue(''); // Dernière visite
    
    // Ajouter des labels
    sheet.getRange('A2').setValue('Total Visites');
    sheet.getRange('B2').setValue('Première Visite');
    sheet.getRange('C2').setValue('Dernière Visite');
  }
  
  return sheet;
}

function getOrCreateLogSheet() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = ss.getSheetByName('Historique');
  
  if (!sheet) {
    sheet = ss.insertSheet('Historique');
    // Ajouter les en-têtes
    sheet.appendRow(['N°', 'Date/Heure', 'Navigateur', 'Résolution', 'Langue', 'Plateforme']);
    sheet.getRange('1:1').setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  
  return sheet;
}

function logVisit(sheet, visitNumber, visitData) {
  sheet.appendRow([
    visitNumber,
    visitData.timestamp,
    visitData.userAgent,
    visitData.screen,
    visitData.language,
    visitData.platform
  ]);
}

// Fonction pour réinitialiser le compteur (à utiliser avec précaution)
function resetCounter() {
  const sheet = getOrCreateSheet();
  sheet.getRange('A1').setValue(0);
  sheet.getRange('B1').setValue('');
  sheet.getRange('C1').setValue('');
  
  Logger.log('Compteur réinitialisé');
}

// Fonction pour obtenir des statistiques
function getStatistics() {
  const sheet = getOrCreateSheet();
  const logSheet = getOrCreateLogSheet();
  
  const count = sheet.getRange('A1').getValue() || 0;
  const totalRows = logSheet.getLastRow() - 1; // -1 pour l'en-tête
  
  return {
    totalVisits: count,
    loggedVisits: totalRows,
    firstVisit: sheet.getRange('B1').getValue(),
    lastVisit: sheet.getRange('C1').getValue()
  };
}
