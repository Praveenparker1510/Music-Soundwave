// =============================================
// SOUNDWAVE — SHARED JS (songs + player)
// =============================================

function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ---- SONG DATABASE (210 songs) ----
const BASE_SONGS = [
  // ELECTRONIC
  {title:"Algorithms",artist:"Kai Engel",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_09_-_Contigo.mp3"},
  {title:"Digital Dreams",artist:"Rolemusic",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_01_-_Piano_Playground.mp3"},
  {title:"Pulse Wave",artist:"Ketsa",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_01_-_Raising_Frequency.mp3"},
  {title:"Night Owl",artist:"Broke For Free",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"},
  {title:"Colorful",artist:"Broke For Free",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_04_-_As_Colorful_As_Ever.mp3"},
  {title:"Infinite Smile",artist:"Ketsa",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_03_-_Infinite_Smile.mp3"},
  {title:"Airplane Mode",artist:"Josh Woodward",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_01_-_Airplane_Mode_Instrumental.mp3"},
  {title:"Busy Baker",artist:"Rolemusic",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_03_-_Busy_Little_Baker.mp3"},
  {title:"Revelation",artist:"Ketsa",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_05_-_Revelation.mp3"},
  {title:"Murmuration",artist:"Broke For Free",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_05_-_Murmuration.mp3"},
  {title:"Enthusiast",artist:"Tours",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"},
  {title:"Ethereal",artist:"Ketsa",genre:"Electronic",emoji:"🎛️",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Ethereal/Ketsa_-_Ethereal.mp3"},
  // JAZZ
  {title:"Blue Note",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Jazzimo.mp3"},
  {title:"Sneaky Snitch",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sneaky%20Snitch.mp3"},
  {title:"Suave Strings",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Suave%20Strings.mp3"},
  {title:"Carefree",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Carefree.mp3"},
  {title:"Fluffing a Duck",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fluffing%20a%20Duck.mp3"},
  {title:"Feather Light",artist:"Blue Dot Sessions",genre:"Jazz",emoji:"🎷",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_01_-_Feather_Light.mp3"},
  {title:"Slow Walk",artist:"Blue Dot Sessions",genre:"Jazz",emoji:"🎷",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_02_-_Slow_Walk.mp3"},
  {title:"Scheming Weasel",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Scheming%20Weasel%20faster.mp3"},
  {title:"Comfortable Mystery",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Comfortable%20Mystery.mp3"},
  {title:"Parachute",artist:"Blue Dot Sessions",genre:"Jazz",emoji:"🎷",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_05_-_Parachute.mp3"},
  {title:"Fast Talkin",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fast%20Talkin.mp3"},
  {title:"Hard Boiled",artist:"Kevin MacLeod",genre:"Jazz",emoji:"🎷",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hard%20Boiled.mp3"},
  // CLASSICAL
  {title:"Interlude I",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_01_-_Interlude.mp3"},
  {title:"Ebb",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_02_-_Ebb.mp3"},
  {title:"Andante",artist:"Kevin MacLeod",genre:"Classical",emoji:"🎻",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Andante.mp3"},
  {title:"Waltz of Treachery",artist:"Kevin MacLeod",genre:"Classical",emoji:"🎻",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Waltz%20of%20Treachery.mp3"},
  {title:"Satin",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_05_-_Satin.mp3"},
  {title:"Mona Lisa",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_06_-_Mona_Lisa.mp3"},
  {title:"January",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_07_-_January.mp3"},
  {title:"Bach Double",artist:"Kevin MacLeod",genre:"Classical",emoji:"🎻",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Bach%20Double%20Violin%20Concerto%20Mvt%201.mp3"},
  {title:"Snowfall",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_11_-_Snowfall.mp3"},
  {title:"Seasons",artist:"Kai Engel",genre:"Classical",emoji:"🎻",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_15_-_Seasons.mp3"},
  {title:"Prelude in C",artist:"Kevin MacLeod",genre:"Classical",emoji:"🎻",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Prelude%20in%20C%20BWV%20846.mp3"},
  {title:"Gymnopedie No 1",artist:"Kevin MacLeod",genre:"Classical",emoji:"🎻",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Gymnopedie%20No%201.mp3"},
  // AMBIENT
  {title:"Flow",artist:"Ketsa",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_02_-_Flow.mp3"},
  {title:"Seclusion",artist:"Ketsa",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_04_-_Seclusion.mp3"},
  {title:"Conscious",artist:"Ketsa",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_06_-_Conscious.mp3"},
  {title:"Beautiful",artist:"Ketsa",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Ketsa/Raising_Frequency/Ketsa_-_07_-_Beautiful.mp3"},
  {title:"Long Road Ahead",artist:"Kevin MacLeod",genre:"Ambient",emoji:"🌌",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Long%20Road%20Ahead.mp3"},
  {title:"Swansong",artist:"Josh Woodward",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_03_-_Swansong_Instrumental.mp3"},
  {title:"Something Elated",artist:"Broke For Free",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_02_-_Something_Elated.mp3"},
  {title:"Petal",artist:"Broke For Free",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_03_-_Petal.mp3"},
  {title:"Sandbox",artist:"Broke For Free",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_06_-_Sandbox.mp3"},
  {title:"Driftwood",artist:"Blue Dot Sessions",genre:"Ambient",emoji:"🌌",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_06_-_Driftwood.mp3"},
  {title:"Fluidscape",artist:"Kevin MacLeod",genre:"Ambient",emoji:"🌌",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fluidscape.mp3"},
  {title:"Awkward Meeting",artist:"Kevin MacLeod",genre:"Ambient",emoji:"🌌",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Awkward%20Meeting.mp3"},
  // FOLK
  {title:"Bury Me Low",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_02_-_Bury_Me_Low_Instrumental.mp3"},
  {title:"The Beautiful Machine",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_04_-_The_Beautiful_Machine_Instrumental.mp3"},
  {title:"Sunny Side Down",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_05_-_Sunny_Side_Down_Instrumental.mp3"},
  {title:"The Simple Life",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_06_-_The_Simple_Life_Instrumental.mp3"},
  {title:"Blackbird",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_07_-_Blackbird_Instrumental.mp3"},
  {title:"Acoustic Breeze",artist:"Kevin MacLeod",genre:"Folk",emoji:"🪕",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Acoustic%20Breeze.mp3"},
  {title:"Always in Motion",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_08_-_Always_in_Motion_Instrumental.mp3"},
  {title:"We Were Young",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_09_-_We_Were_Young_Instrumental.mp3"},
  {title:"I Can Feel It",artist:"Josh Woodward",genre:"Folk",emoji:"🪕",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Breadcrumbs_-_Instrumental/Josh_Woodward_-_10_-_I_Can_Feel_It_Coming_Instrumental.mp3"},
  {title:"Appalachian Walk",artist:"Kevin MacLeod",genre:"Folk",emoji:"🪕",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Appalachian%20Walk.mp3"},
  {title:"Greta Sting",artist:"Kevin MacLeod",genre:"Folk",emoji:"🪕",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Greta%20Sting.mp3"},
  {title:"Water Lily",artist:"Kevin MacLeod",genre:"Folk",emoji:"🪕",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Water%20Lily.mp3"},
  // ROCK
  {title:"Elephant",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_01_-_Elephant.mp3"},
  {title:"Goodbye",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_02_-_Goodbye.mp3"},
  {title:"Like Me",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_03_-_Like_Me.mp3"},
  {title:"Get It Right",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_04_-_Get_It_Right.mp3"},
  {title:"Here",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_05_-_Here.mp3"},
  {title:"I Am Your Captain",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_06_-_I_Am_Your_Captain.mp3"},
  {title:"Clouds",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_07_-_Clouds.mp3"},
  {title:"One Last Road",artist:"Josh Woodward",genre:"Rock",emoji:"🎸",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_08_-_One_Last_Road.mp3"},
  {title:"Rollin at 5",artist:"Kevin MacLeod",genre:"Rock",emoji:"🎸",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Rollin%20at%205.mp3"},
  {title:"District Four",artist:"Kevin MacLeod",genre:"Rock",emoji:"🎸",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/District%20Four.mp3"},
  {title:"RetroFuture Clean",artist:"Kevin MacLeod",genre:"Rock",emoji:"🎸",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/RetroFuture%20Clean.mp3"},
  {title:"Feelin Good",artist:"Kevin MacLeod",genre:"Rock",emoji:"🎸",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Feelin%20Good.mp3"},
  // HIP-HOP
  {title:"Hip Hop Background",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hip%20Hop%20Background.mp3"},
  {title:"Groove Grove",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Groove%20Grove.mp3"},
  {title:"Investigations",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Investigations.mp3"},
  {title:"Happy Go Lucky",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_02_-_Happy_Go_Lucky.mp3"},
  {title:"Swing Thing",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_04_-_Swing_Thing.mp3"},
  {title:"Fun Walk",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_05_-_Fun_Walk.mp3"},
  {title:"Lazy Fair",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_06_-_Lazy_Fair.mp3"},
  {title:"Uptown Groove",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_07_-_Uptown_Groove.mp3"},
  {title:"Happy Clappy",artist:"Rolemusic",genre:"Hip-Hop",emoji:"🎤",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_08_-_Happy_Clappy.mp3"},
  {title:"The Lounge",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/The%20Lounge.mp3"},
  {title:"Local Forecast",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Local%20Forecast.mp3"},
  {title:"Off to Osaka",artist:"Kevin MacLeod",genre:"Hip-Hop",emoji:"🎤",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Off%20to%20Osaka.mp3"},
  // POP
  {title:"Peppy Pepe",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Peppy%20Pepe.mp3"},
  {title:"Sunshine",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Sunshine.mp3"},
  {title:"Ready for the Storm",artist:"Josh Woodward",genre:"Pop",emoji:"✨",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Josh_Woodward/Elephant/Josh_Woodward_-_09_-_Ready_for_the_Storm.mp3"},
  {title:"Funkorama",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Funkorama.mp3"},
  {title:"Energetic Action",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Energetic%20Action.mp3"},
  {title:"Piano Playground",artist:"Rolemusic",genre:"Pop",emoji:"✨",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Rolemusic/The_Sketchbook/Rolemusic_-_01_-_Piano_Playground.mp3"},
  {title:"Swoop",artist:"Blue Dot Sessions",genre:"Pop",emoji:"✨",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_04_-_Swoop.mp3"},
  {title:"Featherlight",artist:"Blue Dot Sessions",genre:"Pop",emoji:"✨",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Blue_Dot_Sessions/Feather_Light/Blue_Dot_Sessions_-_03_-_Featherlight.mp3"},
  {title:"Chill Day",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Chill%20Day.mp3"},
  {title:"Pop Goes the Weasel",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Pop%20Goes%20the%20Weasel.mp3"},
  {title:"Life of Riley",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Life%20of%20Riley.mp3"},
  {title:"Wallpaper",artist:"Kevin MacLeod",genre:"Pop",emoji:"✨",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Wallpaper.mp3"},
  // INSTRUMENTAL
  {title:"Deep Blue",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Deep%20Blue.mp3"},
  {title:"Echoes of Time",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Echoes%20of%20Time.mp3"},
  {title:"Contigo I",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_03_-_Contigo.mp3"},
  {title:"Contigo II",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_08_-_Contigo.mp3"},
  {title:"Contigo III",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_10_-_Contigo.mp3"},
  {title:"Interlude II",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_12_-_Interlude.mp3"},
  {title:"Interlude III",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_13_-_Contigo.mp3"},
  {title:"Interlude IV",artist:"Kai Engel",genre:"Instrumental",emoji:"🎹",url:"https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Kai_Engel/Satin/Kai_Engel_-_14_-_Interlude.mp3"},
  {title:"Strumming Along",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Strumming%20Along.mp3"},
  {title:"Hard Rock",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hard%20Rock.mp3"},
  {title:"Fretless",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Fretless.mp3"},
  {title:"Hero Down",artist:"Kevin MacLeod",genre:"Instrumental",emoji:"🎹",url:"https://incompetech.com/music/royalty-free/mp3-royaltyfree/Hero%20Down.mp3"},
];

// Expand to exactly 22 per category (198 songs total)
const SUFFIXES = ["(Live)","(Remix)","(Acoustic)","(Extended)","(Alt Mix)","(Remaster)","(Session)","(Edit)","(Reprise)","(Cut)","(Version 2)","(Demo)","(Redux)","(Stripped)","(Deluxe)","(Unplugged)","(Studio)","(Radio Edit)","(Club Mix)","(Bonus)","(Instrumental)","(Feat. Strings)","(Piano Version)","(Jazz Cut)","(Beat Mix)"];
const EXTRA = [];
const genreList = ["Electronic","Jazz","Classical","Ambient","Folk","Rock","Hip-Hop","Pop","Instrumental"];
genreList.forEach((g, gIdx) => {
  const gSongs = BASE_SONGS.filter(s => s.genre === g);
  for (let i = 0; i < 10; i++) {
    const b = gSongs[i % gSongs.length];
    EXTRA.push({ ...b, title: b.title + " " + SUFFIXES[(i + gIdx) % SUFFIXES.length] });
  }
});
let SONGS = [...BASE_SONGS, ...EXTRA];

window.isSongsLoaded = false;
async function fetchRealSongs() {
  try {
    const res = await fetch('https://itunes.apple.com/search?term=popular+music&limit=228&media=music');
    const data = await res.json();
    if (data.results && data.results.length > 50) {
      SONGS = data.results.filter(r => r.previewUrl).map((r, i) => ({
        _idx: i,
        title: r.trackName,
        artist: r.artistName,
        genre: r.primaryGenreName,
        url: r.previewUrl,
        photo: r.artworkUrl100 ? r.artworkUrl100.replace('100x100bb', '400x400bb') : `https://picsum.photos/seed/${i}/400`
      }));
    } else throw new Error("Not enough results");
  } catch(e) {
    console.error("iTunes fetch failed, using fallback", e);
    const MP3S = [
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
      'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
    ];
    SONGS.forEach((song, i) => {
      song.photo = `https://picsum.photos/seed/${encodeURIComponent(song.title.replace(/ /g, ''))}/200/200`;
      song.url = MP3S[i % MP3S.length];
      song._idx = i;
    });
  }
  window.isSongsLoaded = true;
  window.dispatchEvent(new Event('songsLoaded'));
}
// fetchRealSongs(); // DISABLED: Keep the perfectly balanced lists
const MP3S = [
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-10.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-12.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-13.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-14.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-15.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3',
  'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-17.mp3'
];
SONGS.forEach((song, i) => {
  song.photo = `https://picsum.photos/seed/${encodeURIComponent(song.title.replace(/ /g, ''))}/200/200`;
  song.url = MP3S[i % MP3S.length];
  song._idx = i;
});
window.isSongsLoaded = true;
window.dispatchEvent(new Event('songsLoaded'));

// ---- PLAYER STATE ----
let curIdx = -1;
let isPlay = false;
let isShuffle = false;
let isRepeat = false;
function getActiveUser() { return localStorage.getItem('sw_user_email') || 'guest'; }
let favorites = new Set(JSON.parse(localStorage.getItem(`sw_favs_${getActiveUser()}`) || '[]'));
const audio = new Audio();
audio.volume = 0.8;

// ---- PLAYER UI ----
document.addEventListener('DOMContentLoaded', () => {
  const playerBar = `
    <div class="player-bar" id="playerBar">
      <div class="pb-info">
        <div class="pb-thumb"><img id="pbThumbImg" src="" style="width:100%;height:100%;object-fit:cover;display:none;"></div>
        <div>
          <div class="pb-title" id="pbTitle">No song playing</div>
          <div class="pb-artist" id="pbArtist">Select a track</div>
        </div>
      </div>
      <div class="pb-controls">
        <div class="pb-btns">
          <button class="pb-btn" id="shuffleBtn" onclick="toggleShuffle()" title="Shuffle">🔀</button>
          <button class="pb-btn" onclick="prevSong()" title="Previous">⏮</button>
          <button class="pb-playpause" id="playPauseBtn" onclick="togglePlay()">▶</button>
          <button class="pb-btn" onclick="nextSong()" title="Next">⏭</button>
          <button class="pb-btn" id="repeatBtn" onclick="toggleRepeat()" title="Repeat">🔁</button>
        </div>
        <div class="pb-progress">
          <span class="pb-time" id="curTime">0:00</span>
          <div class="pb-track" id="pbTrack" onclick="seekAudio(event)">
            <div class="pb-fill" id="pbFill"></div>
          </div>
          <span class="pb-time" id="totTime">0:00</span>
        </div>
      </div>
      <div class="pb-vol">
        <span class="pb-vol-icon">🔉</span>
        <input type="range" class="vol-range" value="80" oninput="setVol(this.value)">
      </div>
    </div>
    <div class="toast" id="toast"></div>
    <div class="auth-overlay" id="authModal" onclick="closeAuth(event)">
      <div class="auth-box" onclick="event.stopPropagation()">
        <button class="auth-close" onclick="closeAuth()">✕</button>
        <h2 id="authTitle" style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:8px">Welcome Back</h2>
        <p id="authDesc" style="color:var(--muted);font-size:0.9rem;margin-bottom:24px">Log in to your SoundWave account</p>
        <div class="form-row" style="margin-bottom:18px">
          <label class="form-label" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:7px;color:var(--muted)">Email Address *</label>
          <input type="email" class="form-input" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px 16px;color:var(--text);font-family:'Outfit',sans-serif;outline:none" id="authEmail" placeholder="you@example.com" required>
        </div>
        <div class="form-row" style="margin-bottom:24px">
          <label class="form-label" style="display:block;font-size:0.82rem;font-weight:600;margin-bottom:7px;color:var(--muted)">Password *</label>
          <input type="password" class="form-input" style="width:100%;background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:12px 16px;color:var(--text);font-family:'Outfit',sans-serif;outline:none" id="authPass" placeholder="••••••••" required>
        </div>
        <button class="form-submit" onclick="submitAuth()" style="width:100%;background:var(--accent);color:white;border:none;border-radius:50px;padding:14px;font-size:0.95rem;font-weight:600;cursor:pointer;font-family:'Outfit',sans-serif;transition:all 0.2s;box-shadow:0 6px 24px rgba(255,107,53,0.3)">Continue</button>
      </div>
    </div>
    <div class="auth-overlay" id="premiumModal" onclick="closePremium(event)">
      <div class="auth-box" style="max-width:480px" onclick="event.stopPropagation()">
        <button class="auth-close" onclick="closePremium()">✕</button>
        <h2 style="font-family:'Playfair Display',serif;font-size:1.8rem;margin-bottom:8px;color:var(--accent2)">Premium Membership</h2>
        <p style="color:var(--muted);font-size:0.9rem;margin-bottom:24px">Upgrade to SoundWave Premium for the ultimate experience.</p>
        <div style="background:var(--card);border:1px solid var(--accent2);border-radius:16px;padding:24px;margin-bottom:24px">
          <div style="font-size:2rem;font-weight:900;margin-bottom:12px;color:var(--accent2)">$4.99<span style="font-size:0.9rem;color:var(--muted);font-weight:500"> / month</span></div>
          <ul style="list-style:none;color:var(--text);font-size:0.9rem;line-height:2;padding:0">
            <li>✅ <strong>Ad-Free</strong> listening experience</li>
            <li>✅ <strong>High-Quality</strong> (320kbps) Audio</li>
            <li>✅ <strong>Unlimited</strong> local downloads</li>
            <li>✅ <strong>Exclusive</strong> early access to releases</li>
          </ul>
        </div>
        <button class="form-submit" onclick="submitPremium()" style="width:100%;background:var(--accent2);color:#000;border:none;border-radius:50px;padding:14px;font-size:0.95rem;font-weight:700;cursor:pointer;font-family:'Outfit',sans-serif;transition:all 0.2s;box-shadow:0 6px 24px rgba(255,179,71,0.25)">Upgrade Now 🚀</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', playerBar);

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration) return;
    const p = (audio.currentTime / audio.duration) * 100;
    document.getElementById('pbFill').style.width = p + '%';
    document.getElementById('curTime').textContent = fmt(audio.currentTime);
    document.getElementById('totTime').textContent = fmt(audio.duration);
  });
  audio.addEventListener('ended', () => {
    if (isRepeat) { audio.currentTime = 0; audio.play(); }
    else nextSong();
  });
});

function playSong(idx, fromGlobal) {
  if (typeof idx === 'number') curIdx = idx;
  const song = SONGS[curIdx];
  if (!song) return;
  audio.src = song.url;
  audio.play().catch(() => toast('⚠️ Could not load audio'));
  isPlay = true;
  document.getElementById('playPauseBtn').textContent = '⏸';
  const thumb = document.getElementById('pbThumbImg');
  thumb.src = song.photo;
  thumb.style.display = 'block';
  document.getElementById('pbTitle').textContent = song.title;
  document.getElementById('pbArtist').textContent = song.artist;
  if (typeof highlightActive === 'function') highlightActive();
}

function togglePlay() {
  if (curIdx < 0) return;
  if (isPlay) { audio.pause(); isPlay = false; document.getElementById('playPauseBtn').textContent = '▶'; }
  else { audio.play(); isPlay = true; document.getElementById('playPauseBtn').textContent = '⏸'; }
}
function nextSong() {
  if (isShuffle) curIdx = Math.floor(Math.random() * SONGS.length);
  else curIdx = (curIdx + 1) % SONGS.length;
  playSong();
}
function prevSong() {
  curIdx = (curIdx - 1 + SONGS.length) % SONGS.length;
  playSong();
}
function toggleShuffle() {
  isShuffle = !isShuffle;
  document.getElementById('shuffleBtn').classList.toggle('on', isShuffle);
  toast(isShuffle ? '🔀 Shuffle ON' : '🔀 Shuffle OFF');
}
function toggleRepeat() {
  isRepeat = !isRepeat;
  document.getElementById('repeatBtn').classList.toggle('on', isRepeat);
  toast(isRepeat ? '🔁 Repeat ON' : '🔁 Repeat OFF');
}
function setVol(v) { audio.volume = v / 100; }
function seekAudio(e) {
  const r = document.getElementById('pbTrack').getBoundingClientRect();
  audio.currentTime = ((e.clientX - r.left) / r.width) * audio.duration;
}
function fmt(s) {
  const m = Math.floor(s / 60);
  return `${m}:${Math.floor(s % 60).toString().padStart(2,'0')}`;
}
function toggleFav(id) {
  if (favorites.has(id)) { favorites.delete(id); toast('💔 Removed from favorites'); }
  else { favorites.add(id); toast('❤️ Added to favorites'); }
  localStorage.setItem(`sw_favs_${getActiveUser()}`, JSON.stringify([...favorites]));
}
function downloadSong(idx) {
  const s = SONGS[idx];
  toast(`⬇️ Downloading "${s.title}"…`);
  const a = document.createElement('a');
  a.href = s.url; a.download = `${s.artist} - ${s.title}.mp3`; a.target = '_blank';
  document.body.appendChild(a); a.click(); document.body.removeChild(a);
}
let toastT;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg; el.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => el.classList.remove('show'), 2200);
}

function openAuthModal(type) {
  document.getElementById('authModal').classList.add('show');
  if (type === 'signup') {
    document.getElementById('authTitle').innerHTML = 'Create Account';
    document.getElementById('authDesc').innerHTML = 'Join SoundWave for free today';
  } else {
    document.getElementById('authTitle').innerHTML = 'Welcome Back';
    document.getElementById('authDesc').innerHTML = 'Log in to your SoundWave account';
  }
}

function closeAuth(e) {
  if (e && e.target.id !== 'authModal' && !e.target.classList.contains('auth-close')) return;
  document.getElementById('authModal').classList.remove('show');
}

function submitAuth() {
  const email = document.getElementById('authEmail').value;
  const pass = document.getElementById('authPass').value;
  if (!email || !pass) { toast('⚠️ Please fill out all required fields'); return; }
  toast('✅ Success!');
  document.getElementById('authModal').classList.remove('show');
  document.getElementById('authEmail').value = '';
  document.getElementById('authPass').value = '';
  localStorage.setItem('sw_user_email', email);
  updateAuthUI();
}

function updateAuthUI() {
  const email = localStorage.getItem('sw_user_email');
  
  // Reload favorites state based on login/logout
  favorites = new Set(JSON.parse(localStorage.getItem(`sw_favs_${getActiveUser()}`) || '[]'));
  if (typeof render === 'function') { updateCounts(); render(); }
  else if (typeof highlightActive === 'function') { highlightActive(); }

  if (email) {
    const letter = email.charAt(0).toUpperCase();
    document.querySelectorAll('.auth-btns').forEach(el => {
      el.innerHTML = `
        <a href="#" class="btn-premium" onclick="event.preventDefault(); openPremiumModal()">💎 Premium</a>
        <div class="user-profile-indicator" style="width:40px;height:40px;border-radius:50%;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:1.1rem;cursor:pointer;box-shadow:0 4px 12px rgba(255,107,53,0.3)" title="Logged in as ${email}" onclick="logoutUser()">${letter}</div>
      `;
    });
    const mm = document.getElementById('mobileMenu');
    if (mm) {
      const links = mm.querySelectorAll('.btn-login, .btn-signup');
      links.forEach(l => l.style.display = 'none');
      let prof = mm.querySelector('.mobile-profile');
      if (!prof) {
        mm.insertAdjacentHTML('beforeend', `<div class="mobile-profile" style="display:flex;gap:10px;padding:10px 12px;align-items:center;justify-content:center;color:var(--text);font-weight:600;"><div style="width:36px;height:36px;border-radius:50%;background:var(--accent);color:white;display:flex;align-items:center;justify-content:center">${letter}</div><span style="font-size:0.9rem">${email}</span><button onclick="logoutUser()" style="margin-left:auto;background:none;border:none;color:var(--muted);cursor:pointer;font-size:0.8rem">Logout</button></div>`);
      } else {
        prof.style.display = 'flex';
      }
    }
  } else {
    document.querySelectorAll('.auth-btns').forEach(el => {
      el.innerHTML = `
        <a href="#" class="btn-premium" onclick="event.preventDefault(); openPremiumModal()">💎 Premium</a>
        <a href="#" class="btn-login" onclick="event.preventDefault(); openAuthModal('login')">Log In</a>
        <a href="#" class="btn-signup" onclick="event.preventDefault(); openAuthModal('signup')">Sign Up</a>
      `;
    });
    const mm = document.getElementById('mobileMenu');
    if (mm) {
      const links = mm.querySelectorAll('.btn-login, .btn-signup');
      links.forEach(l => l.style.display = 'block');
      const prof = mm.querySelector('.mobile-profile');
      if (prof) prof.style.display = 'none';
    }
  }
}

function logoutUser() {
  localStorage.removeItem('sw_user_email');
  updateAuthUI();
  toast('👋 Logged out successfully');
}
document.addEventListener('DOMContentLoaded', updateAuthUI);

function openPremiumModal() {
  document.getElementById('premiumModal').classList.add('show');
}
function closePremium(e) {
  if (e && e.target.id !== 'premiumModal' && !e.target.classList.contains('auth-close')) return;
  document.getElementById('premiumModal').classList.remove('show');
}
function submitPremium() {
  toast('🎉 Welcome to Premium! Redirecting to billing...');
  setTimeout(() => document.getElementById('premiumModal').classList.remove('show'), 2000);
}
