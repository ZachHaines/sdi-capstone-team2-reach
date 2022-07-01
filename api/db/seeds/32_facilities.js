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
    
    // Arkansas
    {name: 'Arkansas', locations_id: 3, url: ''},
    

    // California
    {name: 'California', locations_id: 4, url: ''},
    
    // Colorado
    {name: 'Colorado', locations_id: 5, url: ''},
    

    // Connecticut
    {name: 'Connecticut', locations_id: 6, url: ''},
  

    // Delaware
    {name: 'Delaware', locations_id: 7, url: ''},


    // District of Columbia
    {name: 'District of Columbia', locations_id: 8, url: ''},
  

    // Florida
    {name: 'Florida', locations_id: 9, url: ''},
    
    
    // Georgia
    {name: 'Georgia', locations_id: 10, url: ''},

    // Idaho
    {name: 'Idaho', locations_id: 11, url: ''},
    

    // Illinois
    {name: 'Illinois', locations_id: 12, url: ''},
    

    // Indiana
    {name: 'Indiana', locations_id: 13, url: ''},
    
    // Iowa
    {name: 'Iowa', locations_id: 14, url: ''},
    
    // Kansas
    {name: 'Kansas', locations_id: 15, url: ''},

    // Kentucky
    {name: 'Kentucky', locations_id: 16, url: ''},

    // Louisiana
    {name: 'Louisiana', locations_id: 17, url: ''},

    // Maine
    {name: 'Maine', locations_id: 18, url: ''},
    

    // Maryland
    {name: 'Maryland', locations_id: 19, url: ''},

    // Massachusetts
    {name: 'Massachusetts', locations_id: 20, url: ''},

    // Michigan
    {name: 'Michigan', locations_id: 21, url: ''},

    // Minnesota
    {name: 'Minnesota', locations_id: 22, url: ''},

    // Mississipi
    {name: 'Mississipi', locations_id: 23, url: ''},
    

    // Missouri
    {name: 'Missouri', locations_id: 24, url: ''},

    // Montana
    {name: 'Montana', locations_id: 25, url: ''},
  
    
    // Nebraska
    {name: 'Nebraska', locations_id: 26, url: ''},
  

    // Nevada
    {name: 'Nevada', locations_id: 27, url: ''},
    

    // New Hampshire
    {name: 'New Hampshire', locations_id: 28, url: ''},
    

    // New Jersey
    {name: 'New Jersey', locations_id: 29, url: ''},
   

    // New Mexico
    {name: 'New Mexico', locations_id: 30, url: ''},

    // New York
    {name: 'New York', locations_id: 31, url: ''},

    // North Carolina
    {name: 'North Carolina', locations_id: 32, url: ''},


    // North Dakota
    {name: 'North Dakota', locations_id: 33, url: ''},
    
   
    // Ohio
    {name: 'Ohio', locations_id: 34, url: ''},
    

    // Oklahoma
    {name: 'Oklahoma', locations_id: 35, url: ''},

    // Oregon
    {name: 'Oregon', locations_id: 36, url: ''},

    // Pennsylvania
    {name: 'Pennsylvania', locations_id: 37, url: ''},
  
    // Rhode Island
    {name: 'Rhode Island', locations_id: 38, url: ''},

    // South Carolina
    {name: 'South Carolina', locations_id: 39, url: ''},
  

    // South Dakota
    {name: 'South Dakota', locations_id: 40, url: ''},

    // Tennessee
    {name: 'Tennessee', locations_id: 41, url: ''},

    // Texas
    {name: 'Texas', locations_id: 42, url: ''},

    // Utah
    {name: 'Utah', locations_id: 43, url: ''},

    // Vermont
    {name: 'Vermont', locations_id: 44, url: ''},

    // Virgina
    {name: 'Virgina', locations_id: 45, url: ''},
  

    // Washington
    {name: 'Washington', locations_id: 46, url: ''},


    // West Virgina 
    {name: 'West Virgina', locations_id: 47, url: ''},

    // Wisconsin
    {name: 'Wisconsin', locations_id: 48, url: ''},

    // Wyoming
    {name: 'Wyoming', locations_id: 49, url: ''},
    
    // --------------- OCONUS ---------------  //  

    // Alaska
    {name: 'Alaska', locations_id: 50, url: ''},


    // Armed Forces Europe, Middle East, Africa
    {name: 'Armed Forces Europe, Middle East, Africa', locations_id: 51, url: ''},
    
    // Armed Forces Pacific'
    {name: 'Armed Forces Pacific', locations_id: 52, url: ''},
    {name: 'Camp Humphreys', locations_id: 52, url: ''},
    
    // Australia
    {name: 'Australia', locations_id: 53, url: ''},
    
    // Bahrain
    {name: 'Bahrain', locations_id: 54, url: ''},
   
    // British Indian Ocean Territory
    {name: 'British Indian Ocean Territory', locations_id: 55, url: ''},
    
    // Cuba
    {name: 'Cuba', locations_id: 56, url: ''},

    {name: 'Germany', locations_id: 57, url: ''},

    // Greece
    {name: 'Greece', locations_id: 58, url: ''},

    // Guam
    {name: 'Guam', locations_id: 59, url: ''},

    // Hawaii
    {name: 'Hawaii', locations_id: 61, url: ''},

    // Hungary
    {name: 'Hungary', locations_id: 62, url: ''},
    
    // Italy
    {name: 'Italy', locations_id: 63, url: ''},
  

    // Japan
    {name: 'Japan', locations_id: 64, url: ''},
   

    // Netherlands
    {name: 'Netherlands', locations_id: 65, url: ''},

    
    // Norway
    {name: 'Norway', locations_id: 66, url: ''},

    // Portugal
    {name: 'Portugal', locations_id: 67, url: ''},
    
    // Puerto Rico
    {name: 'Puerto Rico', locations_id: 68, url: ''},
    
    // Singapore
    {name: 'Singapore', locations_id: 69, url: ''},
    
    // South Korea
    {name: 'South Korea', locations_id: 70, url: ''},

    // Spain
    {name: 'Spain', locations_id: 71, url: ''},
    
    // Turkey
    {name: 'Turkey', locations_id: 72, url: ''},
    
    // United Kingdom
    {name: 'United Kingdom', locations_id: 73, url: ''},

    // U.S. Virgin Islands
    {name: 'U.S. Virgin Islands', locations_id: 74, url: ''},


  ]);
};