/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const i = 0;
  await knex('facilities').del()
  await knex('facilities').insert([
    
    // --------------- CONUS ---------------  //  
  
    // Alabama
    {name: 'Alabama', locations_id: 1, url: ''},
    {name: 'Fox Army Health Center at Redstone Arsenal', locations_id: 1, url: 'https://redstone.tricare.mil/'},
    {name: 'Lyster Army Health Clinic', locations_id: 1, url: 'https://lyster.tricare.mil/'},
    {name: '42d Medical Group – Maxwell Air Force Base', locations_id: 1, url: 'https://maxwell.tricare.mil/'},


    // Arizona
    {name: 'Arizona', locations_id: 2, url: ''},
    {name: '355th Medical Group - Davis-Monthan Air Force Base', locations_id: 2, url: 'https://davismonthan.tricare.mil/'},
    {name: '56th Medical Group - Luke Air Force Base', locations_id: 2, url: 'https://luke.tricare.mil/'},
    {name: 'Raymond W. Bliss Army Health Center', locations_id: 2, url: 'https://raymond-bliss.tricare.mil/'},
    
    // Arkansas
    {name: 'Arkansas', locations_id: 3, url: ''},
    {name: '19th Medical Group - Little Rock Air Force Base', locations_id: 3, url: 'https://littlerock.tricare.mil/'},
    
    // California
    {name: 'California', locations_id: 4, url: ''},
    {name: 'California Medical Detachment', locations_id: 4, url: 'https://calmed.tricare.mil/'},
    {name: '9th Medical Group - Beale Air Force Base', locations_id: 4, url: 'https://beale.tricare.mil/'},
    {name: '412th Medical Group - Edwards Air Force Base', locations_id: 4, url: 'https://edwards.tricare.mil/'},
    {name: '61st Medical Squadron - Los Angeles Air Force Base', locations_id: 4, url: 'https://losangeles.tricare.mil/'},
    {name: '60th Medical Group - Travis Air Force Base', locations_id: 4, url: 'https://travis.tricare.mil/'},
    {name: '30th Medical Group - Vandenberg Air Force Base', locations_id: 4, url: 'https://vandenberg.tricare.mil/'},
    {name: 'Naval Hospital Camp Pendleton', locations_id: 4, url: 'https://camp-pendleton.tricare.mil/'},
    {name: 'Naval Hospital Twentynine Palms', locations_id: 4, url: 'https://twentynine-palms.tricare.mil/'},
    {name: 'Naval Medical Center San Diego', locations_id: 4, url: 'https://sandiego.tricare.mil/'},
    {name: 'Naval Health Clinic Lemoore', locations_id: 4, url: 'https://lemoore.tricare.mil/'},
    {name: 'Army Community Hospital Weed-Irwin', locations_id: 4, url: 'https://weed-irwin.tricare.mil/'},
    
    // Colorado
    {name: 'Colorado', locations_id: 5, url: ''},
    {name: '10th Medical Group - Air Force Academy', locations_id: 5, url: 'https://airforceacademy.tricare.mil/'},
    {name: '460th Medical Group - Buckley Air Force Base', locations_id: 5, url: 'https://buckley.tricare.mil/'},
    {name: '21st Medical Group - Space Base Delta 1', locations_id: 5, url: 'https://peterson.tricare.mil/'},
    {name: 'Evans Army Community Hospital', locations_id: 5, url: 'https://evans.tricare.mil/'},


    // Connecticut
    // {name: 'Connecticut', locations_id: 6, url: ''},
  
    // Delaware
    {name: 'Delaware', locations_id: 7, url: ''},
    {name: '436th Medical Group - Dover Air Force Base', locations_id: 7, url: 'https://dover.tricare.mil/'},
 
    // District of Columbia
    {name: 'District of Columbia', locations_id: 8, url: ''},
    {name: '316th Medical Squadron - Joint Base Anacostia-Bolling', locations_id: 8, url: 'https://anacostiabolling.tricare.mil/'},

    // Florida
    {name: 'Florida', locations_id: 9, url: ''},
    {name: 'Army Health Clinic SOUTHCOM', locations_id: 9, url: 'https://southcomclinic.tricare.mil/'},
    {name: '96th Medical Group - Eglin Air Force Base', locations_id: 9, url: 'https://eglin.tricare.mil/'},
    {name: '1st Special Operations Medical Group - Hurlburt Field', locations_id: 9, url: 'https://hurlburt.tricare.mil/'},
    {name: '6th Medical Group - MacDill Air Force Base', locations_id: 9, url: 'https://macdill.tricare.mil/'},
    {name: '45th Medical Group - Patrick Air Force Base', locations_id: 9, url: 'https://patrick.tricare.mil/'},
    {name: '325th Medical Group - Tyndall Air Force Base', locations_id: 9, url: 'https://tyndall.tricare.mil/'},
    {name: 'Naval Hospital Jacksonville', locations_id: 9, url: 'https://jacksonville.tricare.mil/'},
    {name: 'Naval Hospital Pensacola', locations_id: 9, url: 'https://pensacola.tricare.mil/'},
    
    
    // Georgia
    {name: 'Georgia', locations_id: 10, url: ''},
    {name: 'Eisenhower Army Medical Center', locations_id: 10, url: 'https://eisenhower.tricare.mil/'},
    {name: 'Martin Army Community Hospital', locations_id: 10, url: 'https://martin.tricare.mil/'},
    {name: 'Winn Army Community Hospital', locations_id: 10, url: 'https://winn.tricare.mil/'},
    {name: '23d Medical Group - Moody Air Force Base', locations_id: 10, url: 'https://moody.tricare.mil/'},
    {name: '78th Medical Group - Robins Air Force Base', locations_id: 10, url: 'https://robins.tricare.mil/'},

    // Idaho
    {name: 'Idaho', locations_id: 11, url: ''},
    {name: '366th Medical Clinic – Mountain Home Air Force Base', locations_id: 11, url: 'https://mountainhome.tricare.mil/'},
    
    // Illinois
    {name: 'Illinois', locations_id: 12, url: ''},
    {name: '375th Medical Group - Scott Air Force Base', locations_id: 12, url: 'https://scott.tricare.mil/'},
    {name: 'Captain James A. Lovell Federal Health Care Center', locations_id: 12, url: 'https://www.lovell.fhcc.va.gov/'},

    // Indiana
    {name: 'Indiana', locations_id: 13, url: ''},
    
    // Iowa
    // {name: 'Iowa', locations_id: 14, url: ''},
    
    // Kansas
    {name: 'Kansas', locations_id: 15, url: ''},
    {name: '22d Medical Group - McConnell Air Force Base', locations_id: 15, url: 'https://mcconnell.tricare.mil/'},
    {name: 'Irwin Army Community Hospital', locations_id: 15, url: 'https://irwin.tricare.mil/'},
    {name: 'Army Health Clinic Munson-Leavenworth', locations_id: 15, url: 'https://munson.tricare.mil/'},

    // Kentucky
    {name: 'Kentucky', locations_id: 16, url: ''},
    {name: 'Blanchfield Army Community Hospital', locations_id: 16, url: 'https://blanchfield.tricare.mil/'},
    {name: 'Ireland Army Health Clinic', locations_id: 16, url: 'https://ireland.tricare.mil/'},

    // Louisiana
    {name: 'Louisiana', locations_id: 17, url: ''},
    {name: '2d Medical Group - Barksdale Air Force Base', locations_id: 17, url: 'https://barksdale.tricare.mil/'},
    {name: 'Bayne-Jones Army Community Hospital', locations_id: 17, url: 'https://bayne-jones.tricare.mil/'},

    // Maine
    // {name: 'Maine', locations_id: 18, url: ''},
    

    // Maryland
    {name: 'Maryland', locations_id: 19, url: ''},
    {name: 'Kimbrough Ambulatory Care Center', locations_id: 19, url: 'https://kimbrough.tricare.mil/'},
    {name: '316th Medical Group – Malcom Grow Medical Clinics and Surgery Center', locations_id: 19, url: 'https://andrews.tricare.mil/'},
    {name: 'Walter Reed National Military Medical Center', locations_id: 19, url: 'https://walterreed.tricare.mil/'},
    {name: 'Naval Health Clinic Annapolis', locations_id: 19, url: 'https://annapolis.tricare.mil/'},
    {name: 'Naval Health Clinic Patuxent River', locations_id: 19, url: 'https://paxriver.tricare.mil/'},
    {name: 'Barquist Detrick US Army Health Clinic', locations_id: 19, url: 'https://barquist.tricare.mil/'},
    {name: 'Kirk US Army Health Clinic', locations_id: 19, url: 'https://kirk.tricare.mil/'},
    {name: 'Occupational Health Clinic Edgewood Arsenal', locations_id: 19, url: 'https://kirk.tricare.mil/Clinics/Occupational-Health-Edgewood-Arsenal'},

    // Massachusetts
    {name: 'Massachusetts', locations_id: 20, url: ''},
    {name: '66th Medical Squadron - Hanscom Air Force Base', locations_id: 20, url: 'https://hanscom.tricare.mil/'},

    // Michigan
    // {name: 'Michigan', locations_id: 21, url: ''},

    // Minnesota
    // {name: 'Minnesota', locations_id: 22, url: ''},

    // Mississipi
    {name: 'Mississipi', locations_id: 23, url: ''},
    {name: '14th Medical Group - Columbus Air Force Base', locations_id: 23, url: 'https://columbus.tricare.mil/'},
    {name: '81st Medical Group - Keesler Air Force Base', locations_id: 23, url: 'https://keesler.tricare.mil/'},
    
    // Missouri
    {name: 'Missouri', locations_id: 24, url: ''},
    {name: '509th Medical Group - Whiteman Air Force Base', locations_id: 24, url: 'https://whiteman.tricare.mil/'},
    {name: 'General Leonard Wood Army Community Hospital', locations_id: 24, url: 'https://leonard-wood.tricare.mil/'},

    // Montana
    // {name: 'Montana', locations_id: 25, url: ''},
    
    // Nebraska
    {name: 'Nebraska', locations_id: 26, url: ''},
    {name: '55th Medical Group - Offutt Air Force Base', locations_id: 26, url: 'https://offutt.tricare.mil/'},

    // Nevada
    {name: 'Nevada', locations_id: 27, url: ''},
    {name: '99th Medical Group - Nellis Air Force Base', locations_id: 27, url: 'https://nellis.tricare.mil/'},

    // New Hampshire
    // {name: 'New Hampshire', locations_id: 28, url: ''},
    
    // New Jersey
    {name: 'New Jersey', locations_id: 29, url: ''},
    {name: '87th Medical Group - Joint Base McGuire-Dix-Lakehurst', locations_id: 29, url: 'https://mcguiredixlakehurst.tricare.mil/'},
   

    // New Mexico
    {name: 'New Mexico', locations_id: 30, url: ''},
    {name: '27th Special Operations Medical Group - Cannon Air Force Base', locations_id: 30, url: 'https://cannon.tricare.mil/'},
    {name: '49th Medical Group - Holloman Air Force Base', locations_id: 30, url: 'https://holloman.tricare.mil/'},
    {name: '377th Medical Group - Kirtland Air Force Base', locations_id: 30, url: 'https://kirtland.tricare.mil/'},

    // New York
    {name: 'New York', locations_id: 31, url: ''},
    {name: 'Keller Army Community Hospital', locations_id: 31, url: 'https://keller.tricare.mil/'},
    {name: 'Guthrie Ambulatory Care Center', locations_id: 31, url: 'https://guthrie.tricare.mil/'},

    // North Carolina
    {name: 'North Carolina', locations_id: 32, url: ''},
    {name: '43d Medical Squadron - Pope Field', locations_id: 32, url: 'https://pope.tricare.mil/'},
    {name: '4th Medical Group - Seymour Johnson Air Force Base', locations_id: 32, url: 'https://seymourjohnson.tricare.mil/'},
    {name: 'Womack Army Medical Center', locations_id: 32, url: 'https://womack.tricare.mil/'},
    {name: 'Naval Medical Center Camp Lejeune', locations_id: 32, url: 'https://camp-lejeune.tricare.mil/'},
    {name: 'Naval Health Clinic Cherry Point', locations_id: 32, url: 'https://cherrypoint.tricare.mil/'},

    // North Dakota
    {name: 'North Dakota', locations_id: 33, url: ''},
    {name: '319th Medical Group - Grand Forks Air Force Base', locations_id: 33, url: 'https://grandforks.tricare.mil/'},
    {name: '5th Medical Group - Minot Air Force Base', locations_id: 33, url: 'https://minot.tricare.mil/'},
    
    // Ohio
    {name: 'Ohio', locations_id: 34, url: ''},
    {name: '88th Medical Group - Wright-Patterson Air Force Base', locations_id: 34, url: 'https://wrightpatterson.tricare.mil/'},

    // Oklahoma
    {name: 'Oklahoma', locations_id: 35, url: ''},
    {name: '97th Medical Group - Altus Air Force Base', locations_id: 35, url: 'https://altus.tricare.mil/'},
    {name: '72d Medical Group - Tinker Air Force Base', locations_id: 35, url: 'https://tinker.tricare.mil/'},
    {name: '71st Medical Group - Vance Air Force Base', locations_id: 35, url: 'https://vance.tricare.mil/'},
    {name: 'Reynolds Army Health Clinic', locations_id: 35, url: 'http://reynolds.tricare.mil/'},

    // Oregon
    // {name: 'Oregon', locations_id: 36, url: ''},

    // Pennsylvania
    {name: 'Pennsylvania', locations_id: 37, url: ''},
    {name: 'Dunham Army Health Clinic', locations_id: 37, url: 'https://dunham.tricare.mil/'},
  
    // Rhode Island
    {name: 'Rhode Island', locations_id: 38, url: ''},
    {name: 'Naval Health Clinic New England', locations_id: 38, url: 'https://newengland.tricare.mil/'},

    // South Carolina
    {name: 'South Carolina', locations_id: 39, url: ''},
    {name: 'Moncrief Army Health Clinic', locations_id: 39, url: 'https://moncrief.tricare.mil/'},
    {name: '628th Medical Group - Joint Base Charleston', locations_id: 39, url: 'https://charleston.tricare.mil/'},
    {name: '20th Medical Group - Shaw Air Force Base', locations_id: 39, url: 'https://shaw.tricare.mil/'},
    {name: 'Naval Hospital Beaufort', locations_id: 39, url: 'https://beaufort.tricare.mil/'},
    {name: 'Naval Health Clinic Charleston', locations_id: 39, url: 'https://nhc-charleston.tricare.mil/'},

    // South Dakota
    {name: 'South Dakota', locations_id: 40, url: ''},
    {name: '28th Medical Group - Ellsworth Air Force Base', locations_id: 40, url: 'https://ellsworth.tricare.mil/'},
 
    // Tennessee
    // {name: 'Tennessee', locations_id: 41, url: ''},

    // Texas
    {name: 'Texas', locations_id: 42, url: ''},
    {name: '7th Medical Group - Dyess Air Force Base', locations_id: 42, url: 'https://dyess.tricare.mil/'},
    {name: '17th Medical Group - Goodfellow Air Force Base', locations_id: 42, url: 'https://goodfellow.tricare.mil/'},
    {name: '47th Medical Group - Laughlin Air Force Base', locations_id: 42, url: 'https://laughlin.tricare.mil/'},
    {name: '82d Medical Group - Sheppard Air Force Base', locations_id: 42, url: 'https://sheppard.tricare.mil/'},
    {name: '59th Medical Wing - Wilford Hall Ambulatory Surgical Center', locations_id: 42, url: 'https://wilfordhall.tricare.mil/'},
    {name: 'Naval Health Clinic Corpus Christi', locations_id: 42, url: 'https://corpuschristi.tricare.mil/'},
    {name: 'Carl C. Darnall Army Medical Center', locations_id: 42, url: 'https://darnall.tricare.mil/'},
    {name: 'Brooke Army Medical Center', locations_id: 42, url: 'https://bamc.tricare.mil/'},
    {name: 'William Beaumont Army Medical Center', locations_id: 42, url: 'https://william-beaumont.tricare.mil/'}, 

    // Utah
    {name: 'Utah', locations_id: 43, url: ''},
    {name: '75th Medical Group - Hill Air Force Base', locations_id: 43, url: 'https://hill.tricare.mil/'},

    // Vermont
    {name: 'Vermont', locations_id: 44, url: ''},

    // Virgina
    {name: 'Virgina', locations_id: 45, url: ''},
    {name: 'McDonald Army Health Center', locations_id: 45, url: 'https://mcdonald.tricare.mil/'},
    {name: 'Kenner Army Health Clinic', locations_id: 45, url: 'https://kenner.tricare.mil/'},
    {name: '633d Medical Group - Joint Base Langley-Eustis', locations_id: 45, url: 'https://langleyeustis.tricare.mil/'},
    {name: 'Fort Belvoir Community Hospital', locations_id: 45, url: 'https://belvoirhospital.tricare.mil/'},
    {name: 'Naval Medical Clinic Quantico', locations_id: 45, url: 'https://quantico.tricare.mil/'},
    {name: 'Naval Medical Center Portsmouth', locations_id: 45, url: 'https://portsmouth.tricare.mil/'},
    {name: 'Andrew Rader Myer Henderson Hall', locations_id: 45, url: 'https://rader.tricare.mil/'},  

    // Washington
    {name: 'Washington', locations_id: 46, url: ''},
    {name: 'Madigan Army Medical Center', locations_id: 46, url: 'https://madigan.tricare.mil/'},
    {name: 'Naval Health Clinic Oak Harbor', locations_id: 46, url: 'https://oakharbor.tricare.mil/'},
    {name: '92d Medical Group - Fairchild Air Force Base', locations_id: 46, url: 'https://fairchild.tricare.mil/'},
    {name: '62nd Medical Squadron - Joint Base Lewis-McChord', locations_id: 46, url: 'https://lewismcchord.tricare.mil/'},
    {name: 'Naval Hospital Bremerton', locations_id: 46, url: 'https://bremerton.tricare.mil/'},

    // West Virgina 
    {name: 'West Virgina', locations_id: 47, url: ''},

    // Wisconsin
    {name: 'Wisconsin', locations_id: 48, url: ''},

    // Wyoming
    {name: 'Wyoming', locations_id: 49, url: ''},
    {name: '90th Medical Group - F.E. Warren Air Force Base', locations_id: 49, url: 'https://fewarren.tricare.mil/'},

    // --------------- OCONUS ---------------  //  

    // Alaska
    {name: 'Alaska', locations_id: 50, url: ''},
    {name: '354th Medical Group - Eielson Air Force Base', locations_id: 50, url: 'https://eielson.tricare.mil/'},
    {name: '673d Medical Group - Joint Base Elmendorf-Richardson', locations_id: 50, url: 'https://elmendorfrichardson.tricare.mil/'},
    {name: 'Bassett Army Community Hospital', locations_id: 50, url: 'https://bassett-wainwright.tricare.mil/'},


    // Armed Forces Europe, Middle East, Africa
    // {name: 'Armed Forces Europe, Middle East, Africa', locations_id: 51, url: ''},
    
    // Armed Forces Pacific'
    {name: 'Armed Forces Pacific', locations_id: 52, url: ''},
    {name: 'Camp Humphreys', locations_id: 52, url: ''},
    
    // Australia
    // {name: 'Australia', locations_id: 53, url: ''},
    
    // Bahrain
    // {name: 'Bahrain', locations_id: 54, url: ''},
   
    // British Indian Ocean Territory
    {name: 'British Indian Ocean Territory', locations_id: 55, url: ''},
    {name: 'Naval Branch Health Clinic Diego Garcia', locations_id: 55, url: 'https://diegogarcia.tricare.mil/'},
    
    // Cuba
    {name: 'Cuba', locations_id: 56, url: ''},
    {name: 'Naval Hospital Guantanamo Bay', locations_id: 56, url: 'https://guantanamo.tricare.mil/'},

    // Germany
    {name: 'Germany', locations_id: 57, url: ''},
    {name: '86th Medical Group - Ramstein Air Base', locations_id: 57, url: 'https://ramstein.tricare.mil/'},
    {name: '52nd Medical Group - Spangdahlem Air Base', locations_id: 57, url: 'https://spangdahlem.tricare.mil/'},
    {name: 'Landstuhl Regional Medical Center', locations_id: 57, url: 'https://landstuhl.tricare.mil/'},

    // Greece
    // {name: 'Greece', locations_id: 58, url: ''},

    // Guam
    {name: 'Guam', locations_id: 59, url: ''},
    {name: '36th Medical Group - Andersen Air Force Base', locations_id: 59, url: 'https://andersen.tricare.mil/'},
    {name: 'Naval Hospital Guam', locations_id: 59, url: 'https://guam.tricare.mil/'}, 

    // Hawaii
    {name: 'Hawaii', locations_id: 61, url: ''},
    {name: 'Naval Health Clinic Hawaii', locations_id: 61, url: 'https://nhchawaii.tricare.mil/'},
    {name: '15th Medical Group - Joint Base Pearl Harbor-Hickam', locations_id: 61, url: 'https://pearlharborhickam.tricare.mil/'},
    {name: 'Tripler Army Medical Center', locations_id: 61, url: 'https://tripler.tricare.mil/'},
    {name: 'Desmond Doss Health Clinic', locations_id: 61, url: 'https://desmond-doss.tricare.mil/'},

    // Hungary
    // {name: 'Hungary', locations_id: 62, url: ''},
    
    // Italy
    {name: 'Italy', locations_id: 63, url: ''},
    {name: '31st Medical Group - Aviano Air Base', locations_id: 63, url: 'https://aviano.tricare.mil/'},
    {name: 'Naval Hospital Naples', locations_id: 63, url: 'https://naples.tricare.mil/'},
    {name: 'Naval Hospital Sigonella', locations_id: 63, url: 'https://sigonella.tricare.mil/'},

    // Japan
    {name: 'Japan', locations_id: 64, url: ''},
    {name: '18th Medical Group - Kadena Air Base', locations_id: 64, url: 'https://kadena.tricare.mil/'},
    {name: '35th Medical Group - Misawa Air Base', locations_id: 64, url: 'https://misawa.tricare.mil/'},
    {name: '374th Medical Group - Yokota Air Base', locations_id: 64, url: 'https://yokota.tricare.mil/'},
    {name: 'Naval Hospital Okinawa', locations_id: 64, url: 'https://okinawa.tricare.mil/'},
    {name: 'Naval Hospital Yokosuka', locations_id: 64, url: 'https://yokosuka.tricare.mil/'},
    {name: 'Army Health Clinic BG Crawford Sams-Camp Zama', locations_id: 64, url: 'https://bg-crawford.tricare.mil/'},

    // Netherlands
    // {name: 'Netherlands', locations_id: 65, url: ''},

    // Norway
    // {name: 'Norway', locations_id: 66, url: ''},

    // Portugal
    // {name: 'Portugal', locations_id: 67, url: ''},
    
    // Puerto Rico
    {name: 'Puerto Rico', locations_id: 68, url: ''},
    {name: 'Rodriguez Army Health Clinic', locations_id: 68, url: 'https://rodriguez.tricare.mil/'},
 
    // Singapore
    {name: 'Singapore', locations_id: 69, url: ''},
    
    // South Korea
    {name: 'South Korea', locations_id: 70, url: ''},
    {name: '8th Medical Group - Kunsan Air Base', locations_id: 70, url: 'https://kunsan.tricare.mil/'},
    {name: '51st Medical Group - Osan Air Base', locations_id: 70, url: 'https://osan.tricare.mil/'},
    {name: 'Brian D. Allgood Army Community Hospital', locations_id: 70, url: 'Pyeoungtaek | https://briandallgood.tricare.mil/'},

    // Spain
    {name: 'Spain', locations_id: 71, url: ''},
    {name: 'Naval Hospital Rota', locations_id: 71, url: 'https://rota.tricare.mil/'},
    
    // Turkey
    {name: 'Turkey', locations_id: 72, url: ''},
    {name: '39th Medical Group - Incirlik Air Base', locations_id: 72, url: 'https://incirlik.tricare.mil/'},
    
    // United Kingdom
    {name: 'United Kingdom', locations_id: 73, url: ''},
    {name: '423d Medical Squadron - RAF Alconbury', locations_id: 73, url: 'https://rafalconbury.tricare.mil/'},
    {name: '422d Medical Squadron - RAF Croughton', locations_id: 73, url: 'https://rafcroughton.tricare.mil/'},
    {name: '48th Medical Group - RAF Lakenheath', locations_id: 73, url: 'https://raflakenheath.tricare.mil/'},

    // U.S. Virgin Islands
    // {name: 'U.S. Virgin Islands', locations_id: 74, url: ''},

  ]);
};