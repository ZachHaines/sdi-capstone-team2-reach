/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 exports.seed = async function(knex) {
  // Deletes ALL existing entries
  const i = 0;
  await knex('installations').del()
  await knex('installations').insert([
    
    // --------------- CONUS ---------------  //  
  
    // Alabama
    {name: 'Alabama', locations_id: 1},
    {name: '117 ARW', locations_id: 1},
    {name: '187 FW', locations_id: 1},
    {name: 'Anniston Army Depot', locations_id: 1},
    {name: 'Fort Rucker', locations_id: 1},
    {name: 'Maxwell AFB and Gunter Annex', locations_id: 1},
    {name: 'Redstone Arsenal', locations_id: 1},
    {name: 'USAREC, 2nd Medical Recruiting Battalion', locations_id: 1},
    {name: 'USAREC, Montgomery Battalion', locations_id: 1},

    // Arizona
    {name: 'Arizona', locations_id: 2},
    {name: '161 ARW', locations_id: 2},
    {name: '162 Wing', locations_id: 2},
    {name: 'Davis-Monthan AFB', locations_id: 2},
    {name: 'Fort Huachuca', locations_id: 2},
    {name: 'Luke AFB', locations_id: 2},
    {name: 'MCAS Yuma', locations_id: 2},
    {name: 'USAREC, Phoenix Battalion', locations_id: 2},
    {name: 'Yuma Proving Ground', locations_id: 2},
    
    // Arkansas
    {name: 'Arkansas', locations_id: 3},
    {name: '188 WG', locations_id: 3},
    {name: '189 AW', locations_id: 3},
    {name: 'Little Rock AFB', locations_id: 3},
    {name: 'Pine Bluff Arsenal', locations_id: 3},

    // California
    {name: 'California', locations_id: 4},
    {name: '129 RQW', locations_id: 4},
    {name: '144th FW', locations_id: 4},
    {name: '146 AW', locations_id: 4},
    {name: '163 ATKW', locations_id: 4},
    {name: 'Beale AFB', locations_id: 4},
    {name: 'Camp Parks', locations_id: 4},
    {name: 'Camp Pendleton', locations_id: 4},
    {name: 'Defense Distribution Depot San Joaquin', locations_id: 4},
    {name: 'Edwards AFB', locations_id: 4},
    {name: 'Fort Hunter Liggett', locations_id: 4},
    {name: 'Fort Irwin', locations_id: 4},
    {name: 'Los Angeles AFB', locations_id: 4},
    {name: 'MCLB Barstow', locations_id: 4},
    {name: 'MCRD San Diego', locations_id: 4},
    {name: 'March ARB', locations_id: 4},
    {name: 'Marine Corps Air Station Miramar', locations_id: 4},
    {name: 'Marine Corps Mountain Warfare Training Center (MWTC)', locations_id: 4},
    {name: 'Naval Air Facility El Centro', locations_id: 4},
    {name: 'Naval Air Station Lemoore', locations_id: 4},
    {name: 'Naval Air Weapons Station China Lake', locations_id: 4},
    {name: 'Naval Base Coronado', locations_id: 4},
    {name: 'Naval Base Point Loma', locations_id: 4},
    {name: 'Naval Base San Diego', locations_id: 4},
    {name: 'Naval Base Ventura County - Point Mugu/Port Hueneme', locations_id: 4},
    {name: 'Naval Support Activity Monterey', locations_id: 4},
    {name: 'Naval Weapons Station Seal Beach', locations_id: 4},
    {name: 'Presidio of Monterey (DLI/FLC)', locations_id: 4},
    {name: 'Travis Air Force Base', locations_id: 4},
    {name: 'Twentynine Palms (MCAGCC)', locations_id: 4},
    {name: 'USAREC, Los Angeles Battalion', locations_id: 4},
    {name: 'USAREC, Southern California Battalion', locations_id: 4},
    {name: 'USAREC, US Army Battalion Central California', locations_id: 4},
    {name: 'USAREC, US Army Recruiting Battalion Northern California', locations_id: 4},
    {name: 'Vandenberg SFB', locations_id: 4},
    
    // Colorado
    {name: 'Colorado', locations_id: 5},
    {name: '140 WG', locations_id: 5},
    {name: 'Buckley SFB', locations_id: 5},
    {name: 'Fort Carson', locations_id: 5},
    {name: 'Peterson SFB', locations_id: 5},
    {name: 'Schriever SFB', locations_id: 5},
    {name: 'USAF Academy', locations_id: 5},
    {name: 'USAREC, Denver Battalion', locations_id: 5},

    // Connecticut
    {name: 'Connecticut', locations_id: 6},
    {name: '103 AW', locations_id: 6},
    {name: 'Naval Submarine Base New London', locations_id: 6},

    // Delaware
    {name: 'Delaware', locations_id: 7},
    {name: '166th AW', locations_id: 7},
    {name: 'Dover AFB', locations_id: 7},

    // District of Columbia
    {name: 'District of Columbia', locations_id: 8},
    {name: 'Joint Base Anacostia-Bolling', locations_id: 8},
    {name: 'Naval Support Activity Washington', locations_id: 8},
    {name: 'Pentagon - Air Force', locations_id: 8},

    // Florida
    {name: 'Florida', locations_id: 9},
    {name: '125 FW', locations_id: 9},
    {name: 'Eglin AFB', locations_id: 9},
    {name: 'Hurlburt Field', locations_id: 9},
    {name: 'MacDill AFB', locations_id: 9},
    {name: 'Naval Air Station Jacksonville', locations_id: 9},
    {name: 'Naval Air Station Key West', locations_id: 9},
    {name: 'Naval Air Station Pensacola', locations_id: 9},
    {name: 'Naval Air Station Whiting Field', locations_id: 9},
    {name: 'Naval Station Mayport', locations_id: 9},
    {name: 'Naval Support Activity Orlando', locations_id: 9},
    {name: 'Naval Support Activity Panama City', locations_id: 9},
    {name: 'Patrick SFB', locations_id: 9},
    {name: 'Tyndall AFB', locations_id: 9},
    {name: 'USAREC, Jacksonville Battalion', locations_id: 9},
    {name: 'USAREC, Miami Battalion', locations_id: 9},
    {name: 'USAREC, Tampa Battalion', locations_id: 9},
    {name: 'USSOUTHCOM/U.S. Army Garrison-Miami', locations_id: 9},
    
    // Georgia
    {name: 'Georgia', locations_id: 10},
    {name: '116 ACW', locations_id: 10},
    {name: '165 AW', locations_id: 10},
    {name: 'Fort Benning', locations_id: 10},
    {name: 'Fort Gordon', locations_id: 10},
    {name: 'Fort Stewart', locations_id: 10},
    {name: 'Hunter Army Airfield', locations_id: 10},
    {name: 'Marine Corps Logistics Base - Albany', locations_id: 10},
    {name: 'Moody AFB', locations_id: 10},
    {name: 'Naval Submarine Base Kings Bay', locations_id: 10},
    {name: 'Robins AFB', locations_id: 10},
    {name: 'US Army Cadet Command 6th Brigade', locations_id: 10},
    {name: 'USAREC, Atlanta Battalion', locations_id: 10},

    // Idaho
    {name: 'Idaho', locations_id: 11},
    {name: '124 FW', locations_id: 11},
    {name: 'Mountain Home AFB', locations_id: 11},

    // Illinois
    {name: 'Illinois', locations_id: 12},
    {name: '126 ARW', locations_id: 12},
    {name: '182 AW', locations_id: 12},
    {name: '183 Wing', locations_id: 12},
    {name: 'Naval Station Great Lakes', locations_id: 12},
    {name: 'Rock Island Arsenal', locations_id: 12},
    {name: 'Scott Air Force Base', locations_id: 12},
    {name: 'US Army Cadet Command 3rd Brigade', locations_id: 12},
    {name: 'USAREC, Chicago Battalion', locations_id: 12},

    // Indiana
    {name: 'Indiana', locations_id: 13},
    {name: '122 FW', locations_id: 13},
    {name: '181 IW', locations_id: 13},
    {name: 'Naval Support Activity Crane', locations_id: 13},
    {name: 'USAREC, Indianapolis Battalion', locations_id: 13},

    // Iowa
    {name: 'Iowa', locations_id: 14},
    {name: '132 WG', locations_id: 14},
    {name: '185 ARW', locations_id: 14},
    
    // Kansas
    {name: 'Kansas', locations_id: 15},
    {name: '184 IW', locations_id: 15},
    {name: '190 ARW', locations_id: 15},
    {name: 'Fort Leavenworth', locations_id: 15},
    {name: 'Fort Riley', locations_id: 15},
    {name: ' McConnell AFB', locations_id: 15},

    // Kentucky
    {name: 'Kentucky', locations_id: 16},
    {name: '123 AW', locations_id: 16},
    {name: 'Fort Campbell', locations_id: 16},
    {name: 'Fort Knox', locations_id: 16},
    {name: 'US Army Cadet Command 1st Brigade', locations_id: 16},
    {name: 'US Army Cadet Command 7th Brigade', locations_id: 16},
    {name: 'US Army Cadet Command Headquarters', locations_id: 16},
    {name: 'USAREC, 3rd Medical Recruiting Battalion', locations_id: 16},
    {name: 'USAREC, Columbus Battalion', locations_id: 16},

    // Louisiana
    {name: 'Louisiana', locations_id: 17},
    {name: '159 FW', locations_id: 17},
    {name: 'Barksdale Air Force Base', locations_id: 17},
    {name: 'Fort Polk', locations_id: 17},
    {name: 'Naval Air Station Joint Reserve Base New Orleans', locations_id: 17},
    {name: 'USAREC, Baton Rouge Battalion', locations_id: 17},

    // Maine
    {name: 'Maine', locations_id: 18},
    {name: '101 ARW', locations_id: 18},
    {name: 'Portsmouth Naval Shipyard', locations_id: 18},
    {name: 'USAREC, New England Battalion', locations_id: 18},

    // Maryland
    {name: 'Maryland', locations_id: 19},
    {name: '113 WG', locations_id: 19},
    {name: '175 WG', locations_id: 19},
    {name: 'Aberdeen Proving Ground', locations_id: 19},
    {name: 'Fort Detrick', locations_id: 19},
    {name: 'Fort George G. Meade', locations_id: 19},
    {name: 'Fort George G. Meade - Navy', locations_id: 19},
    {name: 'Joint Base Andrews-Naval Air Facility Washington', locations_id: 19},
    {name: 'Naval Air Station Patuxent River', locations_id: 19},
    {name: 'Naval Support Activity Annapolis - U.S. Naval Academy', locations_id: 19},
    {name: 'Naval Support Activity Bethesda Home of Walter Reed National Military Medical Center', locations_id: 19},
    {name: 'Naval Support Activity South Potomac (NSF Indian Head)', locations_id: 19},
    {name: 'USAREC, 1st Medical Recruiting Battalion', locations_id: 19},
    {name: 'USAREC, Baltimore Battalion', locations_id: 19},

    // Massachusetts
    {name: 'Massachusetts', locations_id: 20},
    {name: '102 IW', locations_id: 20},
    {name: '104 FW', locations_id: 20},
    {name: 'Hanscom AFB', locations_id: 20},
    {name: 'Natick Soldier Systems Center (NSSC)', locations_id: 20},
    {name: 'Westover ARB', locations_id: 20},

    // Michigan
    {name: 'Michigan', locations_id: 21},
    {name: '110 ATKW', locations_id: 21},
    {name: '127 WG', locations_id: 21},
    {name: 'Hart-Dole-Inouye Federal Center', locations_id: 21},
    {name: 'USAG Detroit Arsenal', locations_id: 21},

    // Minnesota
    {name: 'Minnesota', locations_id: 22},
    {name: '133 AW', locations_id: 22},
    {name: '148 FW', locations_id: 22},
    {name: 'USAREC, Minneapolis Battalion', locations_id: 22},

    // Mississipi
    {name: 'Mississipi', locations_id: 23},
    {name: '172 AW', locations_id: 23},
    {name: '186 ARW', locations_id: 23},
    {name: 'Columbus AFB', locations_id: 23},
    {name: 'Keesler AFB', locations_id: 23},
    {name: 'Naval Air Station Meridian', locations_id: 23},
    {name: 'Naval Construction Battalion Center Gulfport', locations_id: 23},
    {name: 'Stennis Space Center', locations_id: 23},

    // Missouri
    {name: 'Missouri', locations_id: 24},
    {name: '131 BW', locations_id: 24},
    {name: '139 AW', locations_id: 24},
    {name: 'Fort Leonard Wood', locations_id: 24},
    {name: 'USAREC, Kansas City Battalion', locations_id: 24},
    {name: 'Whiteman AFB', locations_id: 24},

    // Montana
    {name: 'Montana', locations_id: 25},
    {name: '120 AW', locations_id: 25},
    {name: 'Malmstrom Air Force Base', locations_id: 25},
    
    // Nebraska
    {name: 'Nebraska', locations_id: 26},
    {name: '155 ARW', locations_id: 26},
    {name: 'Offutt AFB', locations_id: 26},

    // Nevada
    {name: 'Nevada', locations_id: 27},
    {name: '152 AW', locations_id: 27},
    {name: 'Creech AFB', locations_id: 27},
    {name: 'Naval Air Station Fallon', locations_id: 27},
    {name: 'Nellis AFB', locations_id: 27},
    {name: 'USAREC, 6th Medical Recruiting Battalion', locations_id: 27},

    // New Hampshire
    {name: 'New Hampshire', locations_id: 28},
    {name: '157 ARW', locations_id: 28},

    // New Jersey
    {name: 'New Jersey', locations_id: 29},
    {name: '108 WG', locations_id: 29},
    {name: '177 FW', locations_id: 29},
    {name: 'Joint Base McGuire-Dix-Lakehurst', locations_id: 29},
    {name: 'Naval Weapons Station Earle', locations_id: 29},
    {name: 'Picatinny Arsenal', locations_id: 29},
    {name: 'US Army Cadet Command 2nd Brigade', locations_id: 29},
    {name: 'USAREC, Mid-Atlantic Battalion', locations_id: 29},

    // New Mexico
    {name: 'New Mexico', locations_id: 30},
    {name: '150 SOW', locations_id: 30},
    {name: 'Cannon AFB', locations_id: 30},
    {name: 'Holloman AFB', locations_id: 30},
    {name: 'Kirtland Air Force Base', locations_id: 30},
    {name: 'U.S. Army Garrison White Sands Missile Range', locations_id: 30},

    // New York
    {name: 'New York', locations_id: 31},
    {name: '105 AW', locations_id: 31},
    {name: '106 RQW', locations_id: 31},
    {name: '107 ATKW', locations_id: 31},
    {name: '109 AW', locations_id: 31},
    {name: '174 ATKW', locations_id: 31},
    {name: 'Fort Drum', locations_id: 31},
    {name: 'Fort Hamilton', locations_id: 31},
    {name: 'Naval Support Activity Saratoga Springs', locations_id: 31},
    {name: 'USAREC, Albany Battalion', locations_id: 31},
    {name: 'USAREC, New York City Battalion', locations_id: 31},
    {name: 'USAREC, Syracuse Battalion', locations_id: 31},
    {name: 'West Point', locations_id: 31},

    // North Carolina
    {name: 'North Carolina', locations_id: 32},
    {name: '145 AW', locations_id: 32},
    {name: 'Camp Lejeune', locations_id: 32},
    {name: 'Fort Bragg', locations_id: 32},
    {name: 'MCAS Cherry Point', locations_id: 32},
    {name: 'MCAS New River', locations_id: 32},
    {name: 'Pope Army Airfield', locations_id: 32},
    {name: 'Seymour Johnson AFB', locations_id: 32},
    {name: 'US Army Cadet Command 4th Brigade', locations_id: 32},
    {name: 'USAREC, Raleigh Battalion', locations_id: 32},

    // North Dakota
    {name: 'North Dakota', locations_id: 33},
    {name: '119 WG', locations_id: 33},
    {name: 'Grand Forks AFB', locations_id: 33},
    {name: 'Minot AFB', locations_id: 33},
   
    // Ohio
    {name: 'Ohio', locations_id: 34},
    {name: '121ARW', locations_id: 34},
    {name: '178 WG', locations_id: 34},
    {name: '179th AW', locations_id: 34},
    {name: '180 FW', locations_id: 34},
    {name: 'Defense Supply Center Columbus', locations_id: 34},
    {name: 'USAREC, Cleveland Battalion', locations_id: 34},
    {name: 'USAREC, Columbus Battalion', locations_id: 34},
    {name: 'Wright-Patterson AFB', locations_id: 34},

    // Oklahoma
    {name: 'Oklahoma', locations_id: 35},
    {name: '137 SOW', locations_id: 35},
    {name: '138 FW', locations_id: 35},
    {name: 'Altus AFB', locations_id: 35},
    {name: 'Fort Sill', locations_id: 35},
    {name: 'McAlester Army Ammunition Plant', locations_id: 35},
    {name: 'Tinker AFB', locations_id: 35},
    {name: 'USAREC, Oklahoma City Battalion', locations_id: 35},
    {name: 'Vance AFB', locations_id: 35},

    // Oregon
    {name: 'Oregon', locations_id: 36},
    {name: '142 FW', locations_id: 36},
    {name: '173 FW', locations_id: 36},
    {name: 'USAREC, Portland Battalion', locations_id: 36},

    // Pennsylvania
    {name: 'Pennsylvania', locations_id: 37},
    {name: '171ARW', locations_id: 37},
    {name: '193 SOW', locations_id: 37},
    {name: 'Carlisle Barracks', locations_id: 37},
    {name: 'Defense Logistics Agency at Susquehanna', locations_id: 37},
    {name: 'Naval Support Activity Mechanicsburg', locations_id: 37},
    {name: 'Naval Support Activity Philadelphia', locations_id: 37},
    {name: 'Tobyhanna Army Depot', locations_id: 37},
    {name: 'USAREC, Harrisburg Battalion', locations_id: 37},

    // Rhode Island
    {name: 'Rhode Island', locations_id: 38},
    {name: '143 AW', locations_id: 38},
    {name: 'Naval Station Newport', locations_id: 38},

    // South Carolina
    {name: 'South Carolina', locations_id: 39},
    {name: '169 FW', locations_id: 39},
    {name: 'Fort Jackson', locations_id: 39},
    {name: 'Joint Base Charleston', locations_id: 39},
    {name: 'MCAS Beaufort', locations_id: 39},
    {name: 'MCRD Parris Island', locations_id: 39},
    {name: 'Shaw Air Force Base', locations_id: 39},
    {name: 'USAREC, Columbia Recruiting Battalion', locations_id: 39},

    // South Dakota
    {name: 'South Dakota', locations_id: 40},
    {name: '114 FW', locations_id: 40},
    {name: 'Ellsworth Air Force Base', locations_id: 40},

    // Tennessee
    {name: 'Tennessee', locations_id: 41},
    {name: '118th WG', locations_id: 41},
    {name: '134ARW', locations_id: 41},
    {name: '164 AW', locations_id: 41},
    {name: 'Arnold AFB', locations_id: 41},
    {name: 'Naval Support Activity Mid-South', locations_id: 41},
    {name: 'USAREC, Nashville Battalion', locations_id: 41},

    // Texas
    {name: 'Texas', locations_id: 42},
    {name: '136 AW', locations_id: 42},
    {name: '147 ATKW', locations_id: 42},
    {name: '149 FW', locations_id: 42},
    {name: 'Dyess AFB', locations_id: 42},
    {name: 'Fort Bliss', locations_id: 42},
    {name: 'Fort Hood', locations_id: 42},
    {name: 'Goodfellow AFB', locations_id: 42},
    {name: 'Joint Base San Antonio (Lackland, Randolph, Sam Houston)', locations_id: 42},
    {name: 'Laughlin AFB', locations_id: 42},
    {name: 'Naval Air Station Corpus Christi', locations_id: 42},
    {name: 'Naval Air Station Joint Reserve Base Fort Worth', locations_id: 42},
    {name: 'Naval Air Station Kingsville', locations_id: 42},
    {name: 'Red River Army Depot', locations_id: 42},
    {name: 'Sheppard AFB', locations_id: 42},
    {name: 'US Army Cadet Command 5th Brigade', locations_id: 42},
    {name: 'USAREC, 5th Medical Recruiting Battalion', locations_id: 42},
    {name: 'USAREC, Dallas Battalion', locations_id: 42},
    {name: 'USAREC, Houston Battalion', locations_id: 42},
    {name: 'USAREC, San Antonio Battalion', locations_id: 42},

    // Utah
    {name: 'Utah', locations_id: 43},
    {name: '151st ARW', locations_id: 43},
    {name: 'Dugway Proving Ground', locations_id: 43},
    {name: 'Hill AFB', locations_id: 43},
    {name: 'USAREC, Salt Lake City Battalion', locations_id: 43},

    // Vermont
    {name: 'Vermont', locations_id: 44},
    {name: '158 FW', locations_id: 44},

    // Virgina
    {name: 'Virgina', locations_id: 45},
    {name: '192 FW', locations_id: 45},
    {name: 'DLA McNamara HQC', locations_id: 45},
    {name: 'Defense Supply Center Richmond', locations_id: 45},
    {name: 'Fort Belvoir', locations_id: 45},
    {name: 'Fort Lee', locations_id: 45},
    {name: 'Fort Myer (Joint Base Myer - Henderson Hall)', locations_id: 45},
    {name: 'Henderson Hall (Joint Base Myer - Henderson Hall)', locations_id: 45},
    {name: 'Joint Base Langley-Eustis', locations_id: 45},
    {name: 'Joint Expeditionary Base Little Creek-Fort Story', locations_id: 45},
    {name: 'MCCS Hampton Roads', locations_id: 45},
    {name: 'Marine Corps Base Quantico', locations_id: 45},
    {name: 'Naval Air Station Oceana', locations_id: 45},
    {name: 'Naval Air Station Oceana Dam Neck Annex', locations_id: 45},
    {name: 'Naval Medical Center Portsmouth', locations_id: 45},
    {name: 'Naval Station Norfolk', locations_id: 45},
    {name: 'Naval Support Activity Hampton Roads', locations_id: 45},
    {name: 'Naval Support Activity Hampton Roads Northwest Annex', locations_id: 45},
    {name: 'Naval Support Activity South Potomac (NSF Dahlgren)', locations_id: 45},
    {name: 'Naval Weapons Station Yorktown', locations_id: 45},
    {name: 'Newport News Shipyard', locations_id: 45},
    {name: 'Norfolk Naval Shipyard', locations_id: 45},
    {name: 'Surface Combat Systems Center Wallops Island', locations_id: 45},
    {name: 'USAREC, Richmond Recruiting Battalion', locations_id: 45},

    // Washington
    {name: 'Washington', locations_id: 46},
    {name: '141 ARW', locations_id: 46},
    {name: '194 WG', locations_id: 46},
    {name: 'Fairchild AFB', locations_id: 46},
    {name: 'Joint Base Lewis-McChord', locations_id: 46},
    {name: 'Naval Air Station Whidbey Island', locations_id: 46},
    {name: 'Naval Base Kitsap', locations_id: 46},
    {name: 'Naval Station Everett', locations_id: 46},
    {name: 'US Army Cadet Command 8th Brigade', locations_id: 46},
    {name: 'USAREC, Seattle Battalion', locations_id: 46},

    // West Virgina 
    {name: 'West Virgina', locations_id: 47},
    {name: '130 AW', locations_id: 47},
    {name: '167 AW', locations_id: 47},

    // Wisconsin
    {name: 'Wisconsin', locations_id: 48},
    {name: '115FW', locations_id: 48},
    {name: '128 ARW', locations_id: 48},
    {name: 'Fort McCoy', locations_id: 48},
    {name: 'USAREC, Milwaukee Battalion', locations_id: 48},

    // Wyoming
    {name: 'Wyoming', locations_id: 49},
    {name: '153 AW', locations_id: 49},
    {name: 'F. E. Warren AFB', locations_id: 49},
    
    // --------------- OCONUS ---------------  //  

    // Alaska
    {name: 'Alaska', locations_id: 50},
    {name: '354th Medical Group - Eielson Air Force Base', locations_id: 50},
    {name: '673d Medical Group - Joint Base Elmendorf-Richardson', locations_id: 50},
    {name: 'Bassett Army Community Hospital', locations_id: 50},

    // Armed Forces Europe, Middle East, Africa
    {name: 'Armed Forces Europe, Middle East, Africa', locations_id: 51},
    {name: 'Ankara', locations_id: 51},
    
    // Armed Forces Pacific'
    {name: 'Armed Forces Pacific', locations_id: 52},
    {name: 'Camp Humphreys', locations_id: 52},
    
    // Australia
    {name: 'Australia', locations_id: 53},
    {name: 'Canberra', locations_id: 53},
    
    // Bahrain
    {name: 'Bahrain', locations_id: 54},
    {name: 'Naval Support Activity Bahrain', locations_id: 54},
    {name: 'Kleine Brogel Air Base', locations_id: 54},
    {name: 'USAG BENELUX-Brussels', locations_id: 54},
    {name: 'USAG BENELUX-SHAPE/Chievres', locations_id: 54},
   
    // British Indian Ocean Territory
    {name: 'British Indian Ocean Territory', locations_id: 55},
    {name: 'Navy Support Facility Diego ', locations_id: 55},
    {name: 'Garcia', locations_id: 55},
    
    // Cuba
    {name: 'Cuba', locations_id: 56},
    {name: 'Naval Station Guantanamo Bay', locations_id: 56},

    {name: 'Germany', locations_id: 57},
    {name: 'Ansbach, United States Army Garrison', locations_id: 57},
    {name: 'Buechel Air Base', locations_id: 57},
    {name: 'Geilenkirchen NATO Air Base', locations_id: 57},
    {name: 'Kalkar - U.S. Air Force Element', locations_id: 57},
    {name: 'Ramstein AB', locations_id: 57},
    {name: 'Spangdahlem AB', locations_id: 57},
    {name: 'USAG Bavaria', locations_id: 57},
    {name: 'USAG Bavaria, Garmisch', locations_id: 57},
    {name: 'USAG Bavaria, Hohenfels', locations_id: 57},
    {name: 'USAG Rheinland-Pfalz Kaiserslautern Military Community', locations_id: 57},
    {name: 'USAG Rheinland-Pfalz, Baumholder', locations_id: 57},
    {name: 'USAG Stuttgart', locations_id: 57},
    {name: 'USAG Wiesbaden', locations_id: 57},

    // Greece
    {name: 'Greece', locations_id: 58},
    {name: 'Naval Support Activity Souda', locations_id: 58},
    {name: 'Bay', locations_id: 58},

    // Guam
    {name: 'Guam', locations_id: 59},
    {name: 'Joint Region Marianas - Naval Base Guam', locations_id: 60},

    // Hawaii
    {name: 'Hawaii', locations_id: 61},
    {name: '154 WG', locations_id: 61},
    {name: 'Joint Base Pearl Harbor - Hickam', locations_id: 61},
    {name: 'MCB Hawaii', locations_id: 61},
    {name: 'Schofield Barracks/Fort Shafter', locations_id: 61},

    // Hungary
    {name: 'Hungary', locations_id: 62},
    {name: 'Papa Air Base', locations_id: 62},
    
    // Italy
    {name: 'Italy', locations_id: 63},
    {name: 'Aviano Air Base', locations_id: 63},
    {name: 'Ghedi Air Base', locations_id: 63},
    {name: 'Naval Air Station Sigonella', locations_id: 63},
    {name: 'Naval Support Activity Naples', locations_id: 63},
    {name: ' Naval Support Activity Naples Department Gaeta', locations_id: 63},
    {name: 'USAG Italy', locations_id: 63},
    {name: 'USAG Italy-Darby Military Community', locations_id: 63},

    // Japan
    {name: 'Japan', locations_id: 64},
    {name: 'Camp S D Butler', locations_id: 64},
    {name: 'Camp Foster', locations_id: 64},
    {name: 'Camp Kinser', locations_id: 64},
    {name: 'Camp Courtney', locations_id: 64},
    {name: 'Camp Hansen', locations_id: 64},
    {name: 'Camp Schwab', locations_id: 64},
    {name: 'Camp MCAS Futenma', locations_id: 64},
    {name: 'Commander Fleet Activities Sasebo', locations_id: 64},
    {name: 'Commander Fleet Activities Yokosuka', locations_id: 64},
    {name: 'Kadena AB', locations_id: 64},
    {name: 'Marine Corps Air Station Iwakuni', locations_id: 64},
    {name: 'Misawa AB', locations_id: 64},
    {name: 'Naval Air Facility Atsugi', locations_id: 64},
    {name: 'USAG Japan, Zama', locations_id: 64},
    {name: 'USAG Okinawa, Torii Station', locations_id: 64},
    {name: 'Yokota AB', locations_id: 64},

    // Netherlands
    {name: 'Netherlands', locations_id: 65},
    {name: 'USAG BENELUX Brunssum', locations_id: 65},
    {name: 'Volkel Air Base', locations_id: 65},
    
    // Norway
    {name: 'Norway', locations_id: 66},
    {name: 'Stavanger', locations_id: 66},

    // Portugal
    {name: 'Portugal', locations_id: 67},
    {name: 'Lajes Field', locations_id: 67},
    
    // Puerto Rico
    {name: 'Puerto Rico', locations_id: 68},
    {name: 'Fort Buchanan', locations_id: 68},
    
    // Singapore
    {name: 'Singapore', locations_id: 69},
    {name: 'Singapore Area Coordinator', locations_id: 69},
    
    // South Korea
    {name: 'South Korea', locations_id: 70},
    {name: 'Commander Fleet Activities Chinhae', locations_id: 70},
    {name: 'Kunsan AB', locations_id: 70},
    {name: 'Osan Air Base', locations_id: 70},
    {name: 'USAG Daegu', locations_id: 70},
    {name: 'USAG Yongsan-Casey', locations_id: 70},

    // Spain
    {name: 'Spain', locations_id: 71},
    {name: 'Moron AB', locations_id: 71},
    {name: 'Naval Station Rota', locations_id: 71},
    
    // Turkey
    {name: 'Turkey', locations_id: 72},
    {name: 'Incirlik AB', locations_id: 72},
    {name: 'Izmir AS', locations_id: 72},
    
    // United Kingdom
    {name: 'United Kingdom', locations_id: 73},
    {name: 'RAF Alconbury, RAF Molesworth', locations_id: 73},
    {name: 'RAF Croughton', locations_id: 73},
    {name: 'RAF Fairford', locations_id: 73},
    {name: 'RAF Lakenheath', locations_id: 73},
    {name: 'RAF Mildenhall', locations_id: 73},

    // U.S. Virgin Islands
    {name: 'U.S. Virgin Islands', locations_id: 74},
    {name: '285th CES', locations_id: 74},

  ]);
};

