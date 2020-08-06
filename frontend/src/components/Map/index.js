import React from 'react';
import { InteractiveForceGraph, ForceGraphNode, ForceGraphLink, ForceGraphArrowLink } from 'react-vis-force';
import './map.css';
import Popup from './popup';
import ReactSearchBox from 'react-search-box'

export default class extends React.Component {
    
     constructor(props)
     {
        super(props);
        
        
        // пока граф связей напрямую вставляем в код. потом будем поулчать через API
        
       let data =  {"nodes": [{"id": "AIFactory"}, {"id": "BandaiNamco"}, {"id": "BarcodeScanner"}, {"id": "CityGames"}, {"id": "co.happybits.marcopolo"}, {"id": "com.callapp.contacts"}, {"id": "com.cocoplay.highschoolcrush"}, {"id": "com.ninjakiwi.bftg"}, {"id": "com.psiphon3.subscription"}, {"id": "com.teamlava.fashionstory"}, {"id": "com.ticktalk.translatevoice"}, {"id": "Doodle"}, {"id": "ElectronicArts"}, {"id": "Elokence"}, 
       {"id": "Facebook"}, {"id": "FastFreeGames"}, {"id": "Fingersoft"}, {"id": "FirstTouchGames"}, {"id": "Flipagram"}, {"id": "Flipkart"}, {"id": "fm.clean"}, 
       {"id": "Google"}, {"id": "GoogleBooks"}, {"id": "GooglePayments"}, {"id": "HipsterWhale"}, {"id": "iHeartRadio"}, {"id": "imo"}, {"id": "Instagram"}, {"id": "King"}, {"id": "LinkedIn"}, {"id": "Microsoft"}, {"id": "Outfit7"}, {"id": "OviLexSoft"}, {"id": "Pandora"}, {"id": "PrettySimple"}, {"id": "RobTopGames"}, {"id": "rovio"}, {"id": "Shazam"}, {"id": "SlackerRadio"}, {"id": "Smule"}, {"id": "SonyMobile"}, {"id": "SoundCloud"}, {"id": "Supercell"}, {"id": "SuperSu"}, {"id": "TripAdvisor"}, {"id": "Tumblr"}, 
       {"id": "Twitter"},{"id": "UnderArmour"}, {"id": "VicMan"}, {"id": "Wattpad"}, {"id": "Xender"}, {"id": "ZiffDavis"}, {"id": "360Security"}, {"id": "AccuWeather"}, {"id": "Adobe"}, 
       {"id": "Amazon"},   {"id": "APUS"}, {"id": "ASKfm"}, {"id": "Asus"}, {"id": "Avast"}, {"id": "BackflipStudios"}, {"id": "Badoo"}, {"id": "Baviux"}, {"id": "BeautyPlus"}, {"id": "BigDuckGames"}, {"id": "BitMango"}, {"id": "BitTorrent"}, {"id": "CheetahMobileCMLauncher"}, {"id": "com.allrecipes.spinner.free"}, {"id": "com.amctv.thewalkingdead.deadyourself"}, {"id": "com.apalon.wallpapers"}, {"id": "com.appgeneration.itunerfree"}, {"id": "com.appturbo.appoftheday2015"}, {"id": "com.blyts.parkourlite.activities"}, {"id": "com.boolit.powerlevelwarrior"}, {"id": "com.celltick.lockscreen"}, {"id": "com.ciberdroix.ghostsandspirits"}, {"id": "com.creditkarma.mobile"}, {"id": "com.driftwood.galaxybowl.free"}, {"id": "com.handmark.expressweather"}, {"id": "com.intellijoy.android.shapes"}, {"id": "com.jrtstudio.AnotherMusicPlayer"}, {"id": "com.mico"}, {"id": "com.mobile.bizo.reverse"}, {"id": "com.momento.cam"}, {"id": "com.neowizgames.Rio2016"}, {"id": "com.nexon.hit.global"}, {"id": "com.nianticproject.ingress"}, {"id": "com.onexsoftech.fingerbodytemperatureprank"}, {"id": "com.pescapps.gamekidsfree3"}, {"id": "com.pixign.premiumwallpapers"}, {"id": "com.playrix.fishdomdd.gplay"}, {"id": "com.reddit.frontpage"}, {"id": "com.target.socsav"}, {"id": "com.tuneme.tuneme"}, {"id": "com.united.mobile.android"}, {"id": "com.wevideo.mobile.android"}, {"id": "com.wishabi.flipp"}, {"id": "com.xfinity.cloudtvr"}, {"id": "com.zenstudios.ZenPinball"}, {"id": "CreativeMobile"}, {"id": "DolphinBrowser"}, {"id": "DubStudio"}, {"id": "EpicWar"}, {"id": "Evernote"}, {"id": "FDG"}, {"id": "FortafyGames"}, {"id": "FunGames"}, {"id": "Gameloft"}, {"id": "Groupon"}, {"id": "Halfbrick"}, {"id": "Indeed"}, {"id": "JPBrothers"}, {"id": "Kingsoft"}, {"id": "Krush"}, {"id": "LEGO"}, {"id": "LINE"}, {"id": "Lookout"}, {"id": "MachineZone"}, {"id": "MetroTrains"}, {"id": "Miniclip"}, {"id": "Mobigame"}, {"id": "MobileMotion"}, {"id": "Motorola"}, {"id": "Mozilla"}, {"id": "Musically"}, {"id": "nerByte"}, {"id": "Nordeus"}, {"id": "NQMobile"}, {"id": "OGQ"}, 
       {"id": "Opera"},  {"id": "org.game69studio.nobworld"}, {"id": "PicsArt"}, {"id": "Pinterest"}, {"id": "Psafe"}, {"id": "RelianceGames"}, {"id": "RevontuletStudio"}, {"id": "Samsung"}, {"id": "SamsungGlobal"}, {"id": "Scan"}, {"id": "Scoompa"}, {"id": "Sega"}, {"id": "Sidhe"}, {"id": "SKCommunications"}, {"id": "Skgames"}, {"id": "SoundHound"}, {"id": "Spotify"}, {"id": "TangoMe"}, {"id": "Telegram"}, {"id": "Tencent"}, {"id": "TerranDroid"}, {"id": "TheWeatherChannel"}, {"id": "Tinder"}, {"id": "Truecaller"}, {"id": "TuneIn"}, {"id": "TwitterVine"}, {"id": "Ubisoft"}, {"id": "Verizon"}, {"id": "Viber"}, {"id": "Waze"}, {"id": "WhatsApp"}, {"id": "Wifimaster"}, {"id": "Wooga"}, 
       {"id": "Yahoo"}, {"id": "Zedge"}, {"id": "Zynga"}
       ], 
       "links": [{"source": "Groupon", "target": "Opera"}, {"source": "Google", "target": "CreativeMobile"}, {"source": "Google", "target": "Flipkart"}, {"source": "EpicWar", "target": "com.ninjakiwi.bftg"}, {"source": "com.psiphon3.subscription", "target": "Amazon"}, {"source": "com.intellijoy.android.shapes", "target": "imo"}, {"source": "Spotify", "target": "Shazam"}, {"source": "com.target.socsav", "target": "Twitter"}, {"source": "Facebook", "target": "PrettySimple"}, {"source": "Google", "target": "com.pixign.premiumwallpapers"}, {"source": "com.wishabi.flipp", "target": "Google"}, {"source": "Google", "target": "com.appturbo.appoftheday2015"}, {"source": "Google", "target": "Motorola"}, {"source": "Facebook", "target": "Flipagram"}, {"source": "Twitter", "target": "Microsoft"}, {"source": "Google", "target": "Spotify"}, {"source": "Google", "target": "FDG"}, {"source": "FastFreeGames", "target": "Google"}, {"source": "imo", "target": "Outfit7"}, {"source": "Twitter", "target": "Kingsoft"}, {"source": "com.ninjakiwi.bftg", "target": "Google"}, {"source": "Asus", "target": "RelianceGames"}, {"source": "LinkedIn", "target": "Truecaller"}, {"source": "Facebook", "target": "com.callapp.contacts"}, {"source": "LinkedIn", "target": "com.wishabi.flipp"}, {"source": "Truecaller", "target": "Google"}, {"source": "SoundHound", "target": "Google"}, {"source": "Adobe", "target": "Facebook"}, {"source": "Evernote", "target": "Twitter"}, {"source": "Facebook", "target": "Adobe"}, {"source": "Gameloft", "target": "Outfit7"}, {"source": "Facebook", "target": "CityGames"}, {"source": "Google", "target": "Lookout"}, {"source": "Facebook", "target": "Microsoft"}, {"source": "com.appturbo.appoftheday2015", "target": "Facebook"}, {"source": "Microsoft", "target": "Adobe"}, {"source": "imo", "target": "com.neowizgames.Rio2016"}, {"source": "Facebook", "target": "Supercell"}, {"source": "iHeartRadio", "target": "Twitter"}, {"source": "Facebook", "target": "Avast"}, {"source": "Facebook", "target": "SKCommunications"}, {"source": "com.cocoplay.highschoolcrush", "target": "Facebook"}, {"source": "Yahoo", "target": "DolphinBrowser"}, {"source": "Badoo", "target": "Twitter"}, {"source": "Facebook", "target": "Viber"}, {"source": "Facebook", "target": "com.wishabi.flipp"}, {"source": "com.allrecipes.spinner.free", "target": "Microsoft"}, {"source": "Opera", "target": "com.wevideo.mobile.android"}, {"source": "Google", "target": "Fingersoft"}, {"source": "com.xfinity.cloudtvr", "target": "Facebook"}, {"source": "DubStudio", "target": "Google"}, {"source": "Google", "target": "BackflipStudios"}, {"source": "Google", "target": "CheetahMobileCMLauncher"}, {"source": "Opera", "target": "rovio"}, {"source": "Kingsoft", "target": "Google"}, {"source": "HipsterWhale", "target": "Google"}, {"source": "Google", "target": "APUS"}, {"source": "Facebook", "target": "imo"}, {"source": "FunGames", "target": "Google"}, {"source": "ASKfm", "target": "Google"}, {"source": "AIFactory", "target": "Google"}, {"source": "Facebook", "target": "com.neowizgames.Rio2016"}, {"source": "Facebook", "target": "com.boolit.powerlevelwarrior"}, {"source": "Google", "target": "com.tuneme.tuneme"}, {"source": "com.creditkarma.mobile", "target": "Google"}, {"source": "Facebook", "target": "Zedge"}, {"source": "Google", "target": "org.game69studio.nobworld"}, {"source": "Google", "target": "Miniclip"}, {"source": "Facebook", "target": "FunGames"}, {"source": "Amazon", "target": "com.psiphon3.subscription"}, {"source": "nerByte", "target": "Google"}, {"source": "Baviux", "target": "Google"}, {"source": "SuperSu", "target": "Google"}, {"source": "LinkedIn", "target": "Twitter"}, {"source": "Facebook", "target": "co.happybits.marcopolo"}, {"source": "Google", "target": "BigDuckGames"}, {"source": "com.apalon.wallpapers", "target": "Facebook"}, {"source": "Facebook", "target": "Halfbrick"}, {"source": "Evernote", "target": "Facebook"}, {"source": "OGQ", "target": "Google"}, {"source": "Twitter", "target": "com.apalon.wallpapers"}, {"source": "Wooga", "target": "Facebook"}, {"source": "Spotify", "target": "Facebook"}, {"source": "Microsoft", "target": "Yahoo"}, {"source": "Google", "target": "360Security"}, {"source": "Outfit7", "target": "Google"}, {"source": "Mozilla", "target": "AccuWeather"}, {"source": "LinkedIn", "target": "Supercell"}, {"source": "Google", "target": "Nordeus"}, {"source": "Google", "target": "Verizon"}, {"source": "Facebook", "target": "TangoMe"}, {"source": "Twitter", "target": "Evernote"}, {"source": "com.blyts.parkourlite.activities", "target": "Google"}, {"source": "Musically", "target": "Google"}, {"source": "Google", "target": "RobTopGames"}, {"source": "com.allrecipes.spinner.free", "target": "Adobe"}, {"source": "Indeed", "target": "Facebook"}, {"source": "Adobe", "target": "FunGames"}, {"source": "com.callapp.contacts", "target": "Google"}, {"source": "Google", "target": "com.mobile.bizo.reverse"}, {"source": "Google", "target": "Elokence"}, {"source": "Google", "target": "Smule"}, {"source": "Microsoft", "target": "ElectronicArts"}, {"source": "Twitter", "target": "Outfit7"}, {"source": "Spotify", "target": "Google"}, {"source": "Twitter", "target": "com.boolit.powerlevelwarrior"}, {"source": "Opera", "target": "JPBrothers"}, {"source": "Facebook", "target": "com.ninjakiwi.bftg"}, {"source": "Facebook", "target": "Nordeus"}, {"source": "Facebook", "target": "Sidhe"}, {"source": "Google", "target": "Krush"}, {"source": "Yahoo", "target": "ZiffDavis"}, {"source": "CreativeMobile", "target": "Google"}, {"source": "Google", "target": "BitTorrent"}, {"source": "LEGO", "target": "Facebook"}, {"source": "BitMango", "target": "Google"}, {"source": "Lookout", "target": "Facebook"}, {"source": "WhatsApp", "target": "Telegram"}, {"source": "imo", "target": "Wattpad"}, {"source": "Facebook", "target": "com.mobile.bizo.reverse"}, {"source": "Google", "target": "Zynga"}, {"source": "Twitter", "target": "TwitterVine"}, {"source": "Google", "target": "com.celltick.lockscreen"}, {"source": "Opera", "target": "Groupon"}, {"source": "Facebook", "target": "FDG"}, {"source": "Facebook", "target": "Musically"}, {"source": "Google", "target": "Supercell"}, {"source": "Nordeus", "target": "Google"}, {"source": "Facebook", "target": "King"}, {"source": "Scoompa", "target": "Amazon"}, {"source": "Asus", "target": "Google"}, {"source": "Google", "target": "SoundCloud"}, {"source": "Outfit7", "target": "Gameloft"}, {"source": "ZiffDavis", "target": "Facebook"}, {"source": "Xender", "target": "Facebook"}, {"source": "Sidhe", "target": "Google"}, {"source": "Amazon", "target": "Supercell"}, {"source": "AccuWeather", "target": "Google"}, {"source": "Facebook", "target": "NQMobile"}, {"source": "Opera", "target": "MetroTrains"}, {"source": "rovio", "target": "Opera"}, {"source": "SlackerRadio", "target": "Facebook"}, {"source": "Facebook", "target": "Psafe"}, {"source": "Facebook", "target": "com.amctv.thewalkingdead.deadyourself"}, {"source": "Google", "target": "com.ninjakiwi.bftg"}, {"source": "Twitter", "target": "com.wishabi.flipp"}, {"source": "Adobe", "target": "com.allrecipes.spinner.free"}, {"source": "Google", "target": "Badoo"}, {"source": "com.wishabi.flipp", "target": "Twitter"}, {"source": "Instagram", "target": "Flipagram"}, {"source": "Facebook", "target": "com.target.socsav"}, {"source": "Google", "target": "com.wevideo.mobile.android"}, {"source": "Facebook", "target": "CreativeMobile"}, {"source": "Outfit7", "target": "Yahoo"}, {"source": "Krush", "target": "Google"}, {"source": "Outfit7", "target": "MachineZone"}, {"source": "com.zenstudios.ZenPinball", "target": "Opera"}, {"source": "Facebook", "target": "BackflipStudios"}, {"source": "Opera", "target": "Outfit7"}, {"source": "Google", "target": "Zedge"}, {"source": "Google", "target": "FunGames"}, {"source": "Facebook", "target": "Miniclip"}, {"source": "Facebook", "target": "LEGO"}, {"source": "Flipagram", "target": "Google"}, {"source": "com.mico", "target": "Facebook"}, {"source": "com.appgeneration.itunerfree", "target": "Opera"}, {"source": "Google", "target": "Shazam"}, {"source": "Yahoo", "target": "com.boolit.powerlevelwarrior"}, {"source": "com.cocoplay.highschoolcrush", "target": "Google"}, {"source": "Twitter", "target": "Viber"}, {"source": "Outfit7", "target": "Opera"}, {"source": "Twitter", "target": "UnderArmour"}, {"source": "Adobe", "target": "com.united.mobile.android"}, {"source": "Google", "target": "BandaiNamco"}, {"source": "SKCommunications", "target": "Facebook"}, {"source": "Google", "target": "com.onexsoftech.fingerbodytemperatureprank"}, {"source": "com.ticktalk.translatevoice", "target": "Google"}, {"source": "Miniclip", "target": "Google"}, {"source": "com.wishabi.flipp", "target": "LinkedIn"}, {"source": "Twitter", "target": "CreativeMobile"}, {"source": "Facebook", "target": "EpicWar"}, {"source": "Pandora", "target": "Adobe"}, {"source": "Facebook", "target": "TripAdvisor"}, {"source": "com.boolit.powerlevelwarrior", "target": "Facebook"}, {"source": "Adobe", "target": "Microsoft"}, {"source": "Viber", "target": "Google"}, {"source": "com.target.socsav", "target": "Adobe"}, {"source": "Opera", "target": "GooglePayments"}, {"source": "com.tuneme.tuneme", "target": "Google"}, {"source": "com.boolit.powerlevelwarrior", "target": "Opera"}, {"source": "Wifimaster", "target": "Google"}, {"source": "Google", "target": "com.wishabi.flipp"}, {"source": "Adobe", "target": "Avast"}, {"source": "Google", "target": "Truecaller"}, {"source": "Adobe", "target": "Zynga"}, {"source": "Facebook", "target": "com.cocoplay.highschoolcrush"}, {"source": "Google", "target": "RevontuletStudio"}, {"source": "Google", "target": "BitMango"}, {"source": "Google", "target": "Indeed"}, {"source": "Twitter", "target": "com.handmark.expressweather"}, {"source": "com.psiphon3.subscription", "target": "Google"}, {"source": "LINE", "target": "Google"}, {"source": "Facebook", "target": "iHeartRadio"}, {"source": "com.boolit.powerlevelwarrior", "target": "Yahoo"}, {"source": "Twitter", "target": "Sega"}, {"source": "Google", "target": "com.creditkarma.mobile"}, {"source": "Pinterest", "target": "com.wishabi.flipp"}, {"source": "Waze", "target": "Facebook"}, {"source": "imo", "target": "Tencent"}, {"source": "Facebook", "target": "com.apalon.wallpapers"}, {"source": "com.wevideo.mobile.android", "target": "Google"}, {"source": "Facebook", "target": "Outfit7"}, {"source": "King", "target": "Outfit7"}, {"source": "imo", "target": "com.xfinity.cloudtvr"}, {"source": "MachineZone", "target": "Google"}, {"source": "Facebook", "target": "Truecaller"}, {"source": "Outfit7", "target": "Twitter"}, {"source": "Google", "target": "com.momento.cam"}, {"source": "Facebook", "target": "BitMango"}, {"source": "Facebook", "target": "Zynga"}, {"source": "Facebook", "target": "Evernote"}, {"source": "Twitter", "target": "iHeartRadio"}, {"source": "Facebook", "target": "TheWeatherChannel"}, {"source": "Facebook", "target": "OviLexSoft"}, {"source": "com.target.socsav", "target": "Facebook"}, {"source": "Facebook", "target": "BitTorrent"}, {"source": "Google", "target": "com.jrtstudio.AnotherMusicPlayer"}, {"source": "Google", "target": "SlackerRadio"}, {"source": "Google", "target": "SonyMobile"}, {"source": "Google", "target": "Tumblr"}, {"source": "iHeartRadio", "target": "Facebook"}, {"source": "Google", "target": "com.boolit.powerlevelwarrior"}, {"source": "Twitter", "target": "Halfbrick"}, {"source": "Facebook", "target": "com.ciberdroix.ghostsandspirits"}, {"source": "Facebook", "target": "Waze"}, {"source": "MachineZone", "target": "Outfit7"}, {"source": "Google", "target": "GooglePayments"}, {"source": "Facebook", "target": "com.xfinity.cloudtvr"}, {"source": "iHeartRadio", "target": "imo"}, {"source": "Adobe", "target": "UnderArmour"}, {"source": "Facebook", "target": "MachineZone"}, {"source": "Twitter", "target": "com.callapp.contacts"}, {"source": "Facebook", "target": "com.blyts.parkourlite.activities"}, {"source": "NQMobile", "target": "Facebook"}, {"source": "Facebook", "target": "Kingsoft"}, {"source": "Opera", "target": "com.xfinity.cloudtvr"}, {"source": "Badoo", "target": "Facebook"}, {"source": "Facebook", "target": "SoundCloud"}, {"source": "Google", "target": "com.ticktalk.translatevoice"}, {"source": "Facebook", "target": "Shazam"}, {"source": "imo", "target": "ZiffDavis"}, {"source": "com.celltick.lockscreen", "target": "Google"}, {"source": "Zynga", "target": "Google"}, {"source": "Facebook", "target": "SlackerRadio"}, {"source": "Facebook", "target": "Sega"}, {"source": "Microsoft", "target": "Google"}, {"source": "com.cocoplay.highschoolcrush", "target": "Amazon"}, {"source": "Google", "target": "com.callapp.contacts"}, {"source": "Facebook", "target": "BeautyPlus"}, {"source": "Twitter", "target": "ZiffDavis"}, {"source": "Facebook", "target": "Smule"}, {"source": "LinkedIn", "target": "BackflipStudios"}, {"source": "Google", "target": "com.xfinity.cloudtvr"}, {"source": "Google", "target": "EpicWar"}, {"source": "Google", "target": "Psafe"}, {"source": "com.zenstudios.ZenPinball", "target": "Adobe"}, {"source": "Twitter", "target": "Truecaller"}, {"source": "Google", "target": "SoundHound"}, {"source": "com.playrix.fishdomdd.gplay", "target": "Facebook"}, {"source": "Twitter", "target": "Zedge"}, {"source": "Google", "target": "com.target.socsav"}, {"source": "Google", "target": "OviLexSoft"}, {"source": "Google", "target": "Avast"}, {"source": "com.nexon.hit.global", "target": "Google"}, {"source": "Facebook", "target": "ZiffDavis"}, {"source": "Lookout", "target": "LinkedIn"}, {"source": "Twitter", "target": "com.neowizgames.Rio2016"}, {"source": "Google", "target": "MachineZone"}, {"source": "Gameloft", "target": "Facebook"}, {"source": "Samsung", "target": "SamsungGlobal"}, {"source": "Adobe", "target": "rovio"}, {"source": "Opera", "target": "com.boolit.powerlevelwarrior"}, {"source": "Twitter", "target": "imo"}, {"source": "Google", "target": "GoogleBooks"}, {"source": "Facebook", "target": "FirstTouchGames"}, {"source": "Avast", "target": "Google"}, {"source": "Google", "target": "Sidhe"}, {"source": "Google", "target": "Musically"}, {"source": "Verizon", "target": "Google"}, {"source": "imo", "target": "Asus"}, {"source": "TuneIn", "target": "Google"}, {"source": "com.boolit.powerlevelwarrior", "target": "Twitter"}, {"source": "LinkedIn", "target": "ZiffDavis"}, {"source": "Outfit7", "target": "King"}, {"source": "Twitter", "target": "BackflipStudios"}, {"source": "Adobe", "target": "Pandora"}, {"source": "com.reddit.frontpage", "target": "Google"}, {"source": "BandaiNamco", "target": "Yahoo"}, {"source": "Ubisoft", "target": "Asus"}, {"source": "EpicWar", "target": "Google"}, {"source": "Asus", "target": "Musically"}, {"source": "Mobigame", "target": "Google"}, {"source": "Google", "target": "com.nianticproject.ingress"}, {"source": "Google", "target": "AccuWeather"}, {"source": "Tumblr", "target": "Google"}, {"source": "Google", "target": "TheWeatherChannel"}, {"source": "com.momento.cam", "target": "Google"}, {"source": "Google", "target": "Outfit7"}, {"source": "Avast", "target": "Adobe"}, {"source": "Microsoft", "target": "AccuWeather"}, {"source": "Google", "target": "UnderArmour"}, {"source": "Supercell", "target": "Facebook"}, {"source": "Google", "target": "ZiffDavis"}, {"source": "fm.clean", "target": "Google"}, {"source": "Scoompa", "target": "Google"}, {"source": "Facebook", "target": "Indeed"}, {"source": "Facebook", "target": "com.pixign.premiumwallpapers"}, {"source": "imo", "target": "iHeartRadio"}, {"source": "com.wishabi.flipp", "target": "Facebook"}, {"source": "Microsoft", "target": "com.allrecipes.spinner.free"}, {"source": "Google", "target": "com.blyts.parkourlite.activities"}, {"source": "Opera", "target": "com.zenstudios.ZenPinball"}, {"source": "Facebook", "target": "Doodle"}, {"source": "SamsungGlobal", "target": "Samsung"}, {"source": "Facebook", "target": "com.appgeneration.itunerfree"}, {"source": "Facebook", "target": "LinkedIn"}, {"source": "Scan", "target": "BarcodeScanner"}, {"source": "Google", "target": "com.ciberdroix.ghostsandspirits"}, {"source": "Skgames", "target": "Google"}, {"source": "Facebook", "target": "UnderArmour"}, {"source": "com.target.socsav", "target": "Pinterest"}, {"source": "Supercell", "target": "Google"}, {"source": "Amazon", "target": "com.appturbo.appoftheday2015"}, {"source": "Facebook", "target": "Gameloft"}, {"source": "Twitter", "target": "LEGO"}, {"source": "com.appturbo.appoftheday2015", "target": "Google"}, {"source": "Google", "target": "Baviux"}, {"source": "Google", "target": "Kingsoft"}, {"source": "Pinterest", "target": "com.cocoplay.highschoolcrush"}, {"source": "Facebook", "target": "com.mico"}, {"source": "Krush", "target": "LINE"}, {"source": "Facebook", "target": "com.teamlava.fashionstory"}, {"source": "Indeed", "target": "Twitter"}, {"source": "Facebook", "target": "org.game69studio.nobworld"}, {"source": "com.apalon.wallpapers", "target": "Google"}, {"source": "Google", "target": "imo"}, {"source": "Microsoft", "target": "Facebook"}, {"source": "Google", "target": "SKCommunications"}, {"source": "Facebook", "target": "VicMan"}, {"source": "com.united.mobile.android", "target": "Google"}, {"source": "MobileMotion", "target": "Google"}, {"source": "Facebook", "target": "Tinder"}, {"source": "Yahoo", "target": "Tumblr"}, {"source": "Yahoo", "target": "Microsoft"}, {"source": "Twitter", "target": "Musically"}, {"source": "com.driftwood.galaxybowl.free", "target": "Google"}, {"source": "Google", "target": "Sega"}, {"source": "com.pescapps.gamekidsfree3", "target": "Google"}, {"source": "Indeed", "target": "Google"}, {"source": "Facebook", "target": "PicsArt"}, {"source": "Tumblr", "target": "Yahoo"}, {"source": "LinkedIn", "target": "Facebook"}, {"source": "com.pixign.premiumwallpapers", "target": "Google"}, {"source": "Facebook", "target": "RevontuletStudio"}, {"source": "Opera", "target": "Spotify"}, {"source": "Facebook", "target": "Fingersoft"}, {"source": "Outfit7", "target": "Facebook"}, {"source": "com.playrix.fishdomdd.gplay", "target": "Google"}, {"source": "com.target.socsav", "target": "Google"}, {"source": "King", "target": "com.boolit.powerlevelwarrior"}, {"source": "Facebook", "target": "Pinterest"}, {"source": "LINE", "target": "Krush"}, {"source": "Adobe", "target": "com.zenstudios.ZenPinball"}, {"source": "Facebook", "target": "Spotify"}, {"source": "Yahoo", "target": "Outfit7"}, {"source": "Google", "target": "Halfbrick"}, {"source": "Facebook", "target": "LINE"}, {"source": "Opera", "target": "Verizon"}, {"source": "BandaiNamco", "target": "Google"}, {"source": "Twitter", "target": "LinkedIn"}, {"source": "com.boolit.powerlevelwarrior", "target": "King"}, {"source": "Amazon", "target": "TheWeatherChannel"}, {"source": "Scoompa", "target": "Facebook"}, {"source": "RobTopGames", "target": "Google"}, {"source": "Amazon", "target": "Halfbrick"}, {"source": "com.boolit.powerlevelwarrior", "target": "Google"}, {"source": "Lookout", "target": "Google"}, {"source": "com.cocoplay.highschoolcrush", "target": "Pinterest"}, {"source": "Facebook", "target": "TuneIn"}, {"source": "Facebook", "target": "BigDuckGames"}, {"source": "Indeed", "target": "FortafyGames"}, {"source": "Twitter", "target": "Indeed"}, {"source": "imo", "target": "com.intellijoy.android.shapes"}, {"source": "Facebook", "target": "TerranDroid"}, {"source": "Twitter", "target": "FirstTouchGames"}]}
       
       
        
        let tmpData = {...data}
        
        for (let i=0;i<tmpData.nodes.length;i++)
        {
            tmpData.nodes[i].count = 0;
            tmpData.nodes[i].value = tmpData.nodes[i].id;   
            //tmpData.nodes[i].key = tmpData.nodes[i].id;   
            
            
            //самые большие компании обозначаем цветами
            if (tmpData.nodes[i].id == 'Facebook') tmpData.nodes[i].color = "blue";
            if (tmpData.nodes[i].id == 'Google') tmpData.nodes[i].color = "red";
            if (tmpData.nodes[i].id == 'Twitter') tmpData.nodes[i].color = "purple"
            if (tmpData.nodes[i].id == 'Amazon') tmpData.nodes[i].color ="yellow"
            if (tmpData.nodes[i].id == 'Opera') tmpData.nodes[i].color =  "orange"
            if (tmpData.nodes[i].id == 'Yahoo') tmpData.nodes[i].color =  "magenta"
            
            //считаем кол-во связей у каждой компании (сколько компаний ей отправляют даннные
            for (let j=0;j<tmpData.links.length;j++)
            {
                if (tmpData.links[j].target == tmpData.nodes[i].id)
                    tmpData.nodes[i].count++;
            }
        }            
        
        tmpData.nodes = tmpData.nodes.sort(function(a,b){ return(b.count-a.count)})
        
        //настройки отображения графа
        const myConfig = {
            nodeHighlightBehavior: true,
            automaticRearrangeAfterDropNode: false,
                focusAnimationDuration: 0,
            collapsible: true,
            focusAnimationDuration: 0,
            height: 900,
            width: 1900,
            directed: true,
            d3: {
              gravity: -250,  
              linkLength: 40,
            },
            node: {
                color: "lightgreen",size: 100,highlightStrokeColor: "blue",fontSize:10, 
            },
            link: {
                highlightColor: "lightblue",
            },
        };
        
        
        this.state = {
           data: {...tmpData},
           srcData: {...tmpData},
           config:myConfig,
           selectedNode:null
        };
        
        this.getDataFromNeo4j = this.getDataFromNeo4j.bind(this);
    }
    
    selectItem(item) {
        
        //выделяем узел графа, чтобы показать все его связи и имена компаний, с кот. он связан
        let node = null;
        let filterNodes = this.state.srcData.nodes.filter(e=>e.id == item)
        
        if (filterNodes.length>0) node = filterNodes[0]
        
        if (node)
        this.setState({
              showPopup: false,
              selectedNode:node,
              selectedData:[],
              
            });
    }
    
     togglePopup() {
            this.setState({
              showPopup: false,
              selectedNode:null,
              selectedData:[],
              
            });
          }
    
    async getDataFromNeo4j(companyName='') {
        
        //подключаемся к neo4j
         const neo4j = require('neo4j-driver')
         
         const uri = 'neo4j://neo4j.mogbymo.io:7687';

        const driver = neo4j.driver(uri, neo4j.auth.basic('neo4j', 'neo4j'))
        const session = driver.session()
        
        try {
            //cчитываем узлы. в дальнейшем будем считывать и связи
              const result = await session.run('MATCH (n) RETURN n LIMIT 25')
              
              console.log(result);

              const singleRecord = result.records[0]
              const node = singleRecord.get(0)
              
              console.log(node);

              console.log(node.properties.name)
            } finally {
              await session.close()
            }
        
    }
    
    componentDidMount() {
        
       //в будущем данные будут браться из Neo4j
       this.getDataFromNeo4j()
        
    }
    
    showAll = () => {
        
        //показать граф целиком
        if (this.state.selectedNode)
        {
               this.setState({data:{...this.state.srcData,selectedNode:null}});
        }
    }
    
    openNode = (node) => {

     let nodeId = node.id;
 
       let tmpData = {...this.state.srcData};
       
       let tmpLinks =tmpData.links.filter(e=> (e.source == nodeId || e.target == nodeId))
       
       let sourceData = [];
       let targetData = [];
       
       //записываем какие компании принимают данные от выбранной, а какие отдают ей данные
       for (let i=0;i<tmpLinks.length;i++)
       {
           
           if (sourceData.indexOf(tmpLinks[i].source)<0 && tmpLinks[i].source != nodeId) 
           {
               sourceData.push(tmpLinks[i].source);
               console.log(tmpLinks[i]);
           }
           if (targetData.indexOf(tmpLinks[i].target)<0 && tmpLinks[i].target != nodeId)
           {
               console.log(tmpLinks[i]);
               targetData.push(tmpLinks[i].target);
           }
       }
       
       
       this.setState({sourceData:sourceData,targetData:targetData,selectedNode:node,showPopup:true})  
        
    }
    
    filterNode = (node) => {
            
            //выбираем узел
            this.setState({selectedNode:node})
    }
    
    
    render() {
        
        
        const {data, selectedNode, sourceData, targetData} = this.state;
        
        //используем InteractiveForceGraph для отрисовки связей. чем больше у компании связей, тем больше размер узла
        return (
        <div>
        <div >
       <ReactSearchBox
            placeholder="Выберите компанию из списка"
            data={data.nodes}
             value={selectedNode?selectedNode.id:''}
            onSelect={record => this.filterNode(record)}
          />
          {selectedNode && <button style={{marginTop: 10, marginLeft: 10,paddingTop: 5, paddingLeft:5, paddingRight:5,  paddingBottom: 5, fontSize: 18, color: 'black', backgroundColor: '#59B994',borderRadius: '22px'}} onClick={(e)=>this.openNode(selectedNode)}>Открыть выбранный узел</button>}
          {selectedNode && <button style={{marginTop: 10, marginLeft: 10,paddingTop: 5, paddingLeft:5, paddingRight:5,  paddingBottom: 5, fontSize: 18, color: 'black', backgroundColor: '#59B994',borderRadius: '22px'}} onClick={(e)=>this.setState({selectedNode:null})}>Показать все</button>}
            </div>
            
         <InteractiveForceGraph
              zoom
              zoomOptions={{minScale: 0.25, maxScale: 5}}
              selectedNode={selectedNode}
              simulationOptions={{
                   height: 900, width: 1900,
                  strength: {
                    collide: 12,
                  }
                }}
                
              labelAttr="label"
              onSelectNode={(event,node) => this.filterNode(node)}
              onDeselectNode={(event,node) => this.showAll()}
              highlightDependencies
            >
                { data.nodes.map(function(item,index){
                      return(<ForceGraphNode  node={{ id: item.id, label: item.id, radius: 5+(item.count>20?20:item.count) }} 
                    
                    fill={item.color?item.color:"lightgreen"}
                      />)  
                })}
                { data.links.map(function(item,index){
                      return(<ForceGraphArrowLink link={{ source: item.source, target: item.target, value:10 }} />)  
                })}
              
              
            </InteractiveForceGraph>
             {this.state.showPopup ? 
          <Popup
            text='Закрыть'
            sData={sourceData}
            tData ={targetData}
            node = {selectedNode.id}
            selectItem={this.selectItem.bind(this)}
            closePopup={this.togglePopup.bind(this)}
          />
          : null
        }
        </div>  
        );
    }
}
