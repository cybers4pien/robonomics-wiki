<!DOCTYPE html>
<html lang="de" dir="ltr">
<head>

	
	<script>
		const calculateSettingAsThemeString = () => {
			if (localStorage.getItem('theme') !== null) {
				return localStorage.getItem('theme')
			}

			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
				return "dark";
			}

			return "light";
		}

			const initTheme = () => {
			// init theme
			if(calculateSettingAsThemeString() === 'light') {
				document?.firstElementChild.setAttribute('data-theme', 'light')
			} else {
				document?.firstElementChild.setAttribute('data-theme', 'dark')
			}
		}

		initTheme()
  </script>

<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Robonomics Wiki</title>
<meta name="title" content="Robonomics Wiki">
<meta name="description" content="2 else return fileContentsplit...">
<meta name="generator" content="eleventy">
<meta property="og:type" content="website">
<meta property="og:url" content="https://wiki.robonomics.network/">
<meta property="og:locale" content="de">
<meta property="og:title" content="Robonomics Wiki">
<meta property="og:description" content="2 else return fileContentsplit...">
<meta property="og:image" content="/assets/images/og-images/de-docs-docs.11tydata.j.png">
<meta property="og:image:alt" content="Learn Robonomics through tutorials and practically useful experimenting. This documentation is designed to help you connect robots or code dApps within Robonomics Network.">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:site" content="@AIRA_Robonomics">
<meta name="twitter:creator" content="@AIRA_Robonomics">
<meta name="twitter:url" content="https://wiki.robonomics.network/">
<meta name="twitter:title" content="Robonomics Wiki">
<meta name="twitter:description" content="2 else return fileContentsplit...">
<meta name="twitter:image" content="/assets/images/og-images/de-docs-docs.11tydata.j.png">
<meta name="twitter:image:alt" content="Learn Robonomics through tutorials and practically useful experimenting. This documentation is designed to help you connect robots or code dApps within Robonomics Network.">
<link rel="canonical" href="https://wiki.robonomics.network/">


  <!-- Favicon  -->
  <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicon/apple-touch-icon.png">
  <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicon/favicon-32x32.png">
  <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicon/favicon-16x16.png">

  
	<link rel="stylesheet" href="/assets/css/main.css?" />
  
  <script defer type="module" src="/assets/js/index.js"></script>

<!-- Matomo -->
<script>
  var _paq = window._paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(["setExcludedReferrers", ["github.com\/kap2fox\/kusama.practice","kap2fox.github.io\/","localhost:8080\/","localhost:3000\/","localhost\/"]]);
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//matomo.robonomics.network/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '4']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
</head>
<body>
  <header class="header">
      <div class="header-top">

        <a href="/de" class="header-logo">
          <img alt="Robonomics logo" src="/assets/images/robonomic-logo-robo.svg"/>
          <span>Robonomics WIKI</span>
        </a>
        <div class="header-center">
					<link href="/_pagefind/pagefind-ui.css" rel="stylesheet">

<div id="search" class="search"></div>

<script src="/_pagefind/pagefind-ui.js" onload="new PagefindUI({ element: '#search', showImages: false  });"></script>

        </div>

        <div class="header-nav">
          <button role="button" aria-label="Toggle dark/light" class="toggle-theme">
		<svg class="dark-theme-icon hide" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
		<svg class="light-theme-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</button>
					<select aria-label="choose a language" class="inline-block language-switcher" tabindex="0">
	
   
			<option value="ar">
				ar 
			</option>
		
	
   
			<option selected value="de">
				de
			</option>
		
	
   
			<option value="en">
				en 
			</option>
		
	
   
			<option value="el">
				el 
			</option>
		
	
   
			<option value="es">
				es 
			</option>
		
	
   
			<option value="fr">
				fr 
			</option>
		
	
   
			<option value="it">
				it 
			</option>
		
	
   
			<option value="ja">
				ja 
			</option>
		
	
   
			<option value="ko">
				ko 
			</option>
		
	
   
			<option value="pt">
				pt 
			</option>
		
	
   
			<option value="ru">
				ru 
			</option>
		
	
   
			<option value="uk">
				uk 
			</option>
		
	
   
			<option value="zh">
				zh 
			</option>
		
	
</select>




					<div class="sectionToggler">
	<button class="btn header-nav__icon header-nav__sidebar-docs" popovertarget="sidebarDocs"></button>
	
		<button class="btn header-nav__icon header-nav__sidebar-content" popovertarget="sidebarContent"></button>
	
</div>



        </div>
      </div>

			
    </div>
  </header>
<div class="all-content custom-scroll">
	<main class="main post layout__page post">
		<section class="section doc-section">
			<div class="layout page">

				

				<div id="sidebarDocs" popover class="sidebar page__sidebar custom-scroll">
					



<ul class="nav-list menu" role="list">
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
          
					
						
						
						
						
						
						
					
        
          
					
        
          
					
        
          
					
						
						
							
							
							
							
							
							
						
						
						
						
							
							
							
							
							
							
						
						
						
						
							
							
							
							
							
							
						
						
					
        
          
					
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
						
					
        
          
					
						
						
						
						
						
						
					
        
      >
        <summary class="menu-subtitle" >Smart Home</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/robonomics-smart-home-overview">Übersicht</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/install-smart-home">Smart Home installieren</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/hass-init">Home Assistant Initialisierung</a>
    </li>
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Geräte hinzufügen</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/zigbee-devices">Zigbee-Geräte</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/virtual-devices">Virtuelle Geräte</a>
    </li></ul>
    </li>
  
  
		
    <li   data-topic="Smart Home" data-title="Subscription Activate" >
      <a class="menu-link" href="/de/docs/sub-activate/?topic=smart-home">Abonnement aktivieren</a>
    </li>
  
		
    <li   data-topic="Smart Home" data-title="Robonomics Integration Setup" >
      <a class="menu-link" href="/de/docs/robonomics-hass-integration/?topic=smart-home">Robonomics Integrationskonfiguration</a>
    </li>
  
    <li>
      <details
			class="menu-details"
          
					
						
						
						
						
						
						
						
						
						
					
        
          
					
						
						
						
						
						
						
						
						
						
					
        
          
					
						
						
						
						
						
						
						
						
						
					
        
      >
        <summary class="menu-subtitle" >Erweiterte Konfiguration</summary>
        <ul class="menu" role="list">
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Home Assistant OS aktualisieren</summary>
        <ul class="menu" role="list">
  
		
    <li   data-topic="Upgrade Home Assistant OS" data-title="Subscription Activate" >
      <a class="menu-link" href="/de/docs/sub-activate/?topic=upgrade-home assistant os">Abonnement aktivieren</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/hass-os-upgrade">Robonomics Installation</a>
    </li>
  
		
    <li   data-topic="Upgrade Home Assistant OS" data-title="Robonomics Integration Setup" >
      <a class="menu-link" href="/de/docs/robonomics-hass-integration/?topic=upgrade-home assistant os">Robonomics Integrationskonfiguration</a>
    </li></ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Upgrade Home Assistant Docker für Unix-ähnliche OS</summary>
        <ul class="menu" role="list">
  
		
    <li   data-topic="Upgrade Home Assistant Docker for Unix-like OS" data-title="Subscription Activate" >
      <a class="menu-link" href="/de/docs/sub-activate/?topic=upgrade-home assistant docker for unix-like os">Abonnement aktivieren</a>
    </li>
  
		
    <li   data-topic="Upgrade Home Assistant Docker for Unix-like OS" data-title="Robonomics Installation" >
      <a class="menu-link" href="/de/docs/hass-docker-core-upgrade/?topic=upgrade-home assistant docker for unix-like os">Robonomics Installation</a>
    </li>
  
		
    <li   data-topic="Upgrade Home Assistant Docker for Unix-like OS" data-title="Robonomics Integration Setup" >
      <a class="menu-link" href="/de/docs/robonomics-hass-integration/?topic=upgrade-home assistant docker for unix-like os">Robonomics Integrationskonfiguration</a>
    </li></ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Home Assistant Core aktualisieren</summary>
        <ul class="menu" role="list">
  
		
    <li   data-topic="Upgrade Home Assistant Core" data-title="Subscription Activate" >
      <a class="menu-link" href="/de/docs/sub-activate/?topic=upgrade-home assistant core">Abonnement aktivieren</a>
    </li>
  
		
    <li   data-topic="Upgrade Home Assistant Core" data-title="Robonomics Installation" >
      <a class="menu-link" href="/de/docs/hass-docker-core-upgrade/?topic=upgrade-home assistant core">Robonomics Installation</a>
    </li>
  
		
    <li   data-topic="Upgrade Home Assistant Core" data-title="Robonomics Integration Setup" >
      <a class="menu-link" href="/de/docs/robonomics-hass-integration/?topic=upgrade-home assistant core">Robonomics Integrationskonfiguration</a>
    </li></ul>
    </li>
  </ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Verwendung</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/add-user">Benutzer hinzufügen</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/smart-home-telemetry">Smart Home Telemetrie erhalten</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/backup-services">Backup-Services</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/robonomics-video">Robonomics Video-Service</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/ptz-camera">RTZ-Kamerasteuerung in Home Assistant</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/pinata-setup">Pinata-Einrichtung</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/on-chain-gov-experiment">On-Chain Gov Experiment</a>
    </li></ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Baupläne</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/use-blueprints">Verwendung von Bauplänen</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/door-notification">Benachrichtigung bei Türöffnung erhalten</a>
    </li></ul>
    </li>
  </ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Robonomics-Geräte</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/ir-controller">IR-Fernbedienung</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/energy-monitoring">Energieüberwachung</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/1gang-smart-switch">1-Gang Smart-Schalter</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/2gang-smart-switch">2-Gang Smart-Schalter</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/sds-sensor-connect">Luftqualitätssensor</a>
    </li></ul>
    </li>
  
  
    <li>
      <details
			class="menu-details"
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
          
					
        
      >
        <summary class="menu-subtitle" >Robonomics Parachain-Theorie</summary>
        <ul class="menu" role="list">
  
		
    <li  >
      <a class="menu-link" href="/de/docs/glossary">Glossar</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/create-account-in-dapp">Konto für Robonomics Parachain erstellen</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/run-dev-node">Ausführung des Robonomics Dev Node</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/adding-funds-to-account-in-dapp">Hinzufügen von Geldern zu Ihrem Konto im Robonomics-Portal</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/datalog">Grundlagen: Datalog</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/launch">Grundlagen: Start</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/digital-twins">Grundlagen: Digitale Zwillinge</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/liability">Grundlagen: Haftung</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/rinterface">Python-Schnittstelle und Robonomics IO</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/get-subscription">RWS: Kauf eines Abonnements</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/subscription-launch">RWS: Senden eines Starts mit Abonnement</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/robonomics-ethereum">Robonomics auf Ethereum</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/robonomics-opengov">Robonomics OpenGov</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/how-to-build-collator-node">Erstellen eines Collator-Knotens aus der Quelle</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/how-to-launch-the-robonomics-collator">Starten des Robonomics-Collators</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/how-to-update-collator-node-version">Aktualisieren der Collator-Knoten-Version</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/esp32-datalog-demo">Senden von Extrinsic von ESP</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/edit-wiki">Wiki bearbeiten</a>
    </li>
  
		
    <li  >
      <a class="menu-link" href="/de/docs/contributing">Beitragen</a>
    </li></ul>
    </li>
  </ul>
				</div>

				<div class="page-content--withBC">
					
						

 <div class="breadcrumbs">
	
  </div>
					
					<div class="page-content">
						<div class="page-title"><h1 class="page__title-main"></h1></div>
						<div class="docs-content" data-pagefind-body>
							
						</div>
						
							



<section class="robo-wiki-feedback">
	<div class="grid-4">
		
			
			
			
			
	<div tabindex="0"  class="robo-wiki-feedback__wrapper">
    <button class="robo-wiki-feedback__item" data-text="Couldn&#39;t complete">
      <div class="robo-wiki-feedback__checkbox">
        <input id="checkbox-0" type="checkbox" name="checkbox" class="custom-checkbox__field" >
        <span class="custom-checkbox__content"></span>
      </div>
      <div class="robo-wiki-feedback__content">
				<svg xmlns="http://www.w3.org/2000/svg" width="121.569" height="123.922" viewBox="0 0 121.569 123.922" aria-hidden="true"   ><g id="Group_1294" data-name="Group 1294" transform="translate(-255.592 -205.358)"><g id="Group_1270" data-name="Group 1270" transform="translate(255.592 205.358)"><path id="Path_5240" data-name="Path 5240" d="M299.539,306.979c-.186.71-15.062,7.965-20.045,8.177,0,0,5.741-14.874,3.423-11.915-5.637,7.2-21.814,2.366-21.814,2.366s14.065-7.8,10.8-14.665c0,0-11.762,5.006-15.757,4.34s15.284-7.044,10.619-19.635,3.462-39.729,21.254-48.341,10.445-21.948,10.445-21.948,7.539,14.62,6.551,15.5,11.358-5.747,11.669-9.835,2.139,7.761,2.139,7.761,30.7-1.137,39.8,20.265,14.611,25.5,18.142,26.384-17.41.413-20.134-4.7,4.151,24.829,12.193,29.73-18.745-.752-19.634-1.283S299.539,306.979,299.539,306.979Z" transform="translate(-255.592 -205.358)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1271" data-name="Group 1271" transform="translate(292.741 296.527)"><path id="Path_5241" data-name="Path 5241" d="M353.087,433.252c.528,3.164-4.041,28.161-4.041,28.161s7.278,4.578,13.2,3.667c4.767-.733,6.4-2.682,6.4-2.682a84.066,84.066,0,0,1,3.243-18.961C374.915,432.911,353.087,433.252,353.087,433.252Z" transform="translate(-348.644 -432.85)" fill="#fff" fill-rule="evenodd"/><path id="Path_5242" data-name="Path 5242" d="M360,465.006c-5.575,0-11.491-3.678-11.765-3.85a.4.4,0,0,1-.182-.413c1.576-8.622,4.448-25.575,4.039-28.023a.4.4,0,0,1,.39-.468,51.515,51.515,0,0,1,7.549.557c5.407.822,9.033,2.394,10.778,4.673a5.881,5.881,0,0,1,.869,5.467,84.5,84.5,0,0,0-3.227,18.861.406.406,0,0,1-.094.248c-.071.084-1.786,2.073-6.647,2.821A11.267,11.267,0,0,1,360,465.006Zm-11.106-4.391c1.275.751,7.569,4.258,12.694,3.471,3.941-.606,5.672-2.071,6.065-2.453a86.355,86.355,0,0,1,3.253-18.905,5.056,5.056,0,0,0-.735-4.756c-3.49-4.56-14.882-4.9-17.246-4.915C353.073,437.42,349.393,457.861,348.892,460.615Z" transform="translate(-348.046 -432.253)" fill="#2c2826"/></g><g id="Group_1272" data-name="Group 1272" transform="translate(281.243 247.193)"><path id="Path_5243" data-name="Path 5243" d="M326.782,355.859s.48,10.312,8.343,16.656,15.478,10.044,28.824,9.27,24.8-13.147,29.726-29.569,2.575-22.759,2.575-22.759-20.918-16.207-22.321-16.683-36.96-2.2-37.315-2.289-14.387,14.429-14.387,14.429l-1,11.267s-2.635,14.338,1.753,17.735S326.782,355.859,326.782,355.859Z" transform="translate(-320.037 -310.079)" fill="#fff"/><path id="Path_5244" data-name="Path 5244" d="M359.915,381.686c-11.486,0-18.455-3.659-25.648-9.462-6.741-5.439-8.155-13.838-8.43-16.27-.537-.1-1.544-.648-3.708-2.323-4.53-3.507-2.011-17.531-1.9-18.126l1-11.229a.4.4,0,0,1,.111-.244c.035-.036,3.55-3.673,7.063-7.252,7.27-7.407,7.387-7.374,7.715-7.287.209.025,3.6.206,7.9.434,14.376.765,28.49,1.539,29.444,1.862,1.426.484,20.291,15.083,22.438,16.746a.4.4,0,0,1,.131.178,16.644,16.644,0,0,1,.583,5.364c-.026,3.345-.594,9.121-3.15,17.65-5.209,17.377-17.019,29.1-30.088,29.854Q361.575,381.686,359.915,381.686Zm-33.317-26.2c.14,1.6,1.222,10.5,8.174,16.111,7.737,6.242,15.209,9.953,28.549,9.182,12.728-.739,24.254-12.233,29.364-29.283,2.514-8.387,3.082-14.061,3.116-17.344a17.9,17.9,0,0,0-.5-5.059c-8.38-6.492-21.111-16.2-22.106-16.544-.994-.319-19.361-1.3-29.229-1.821-5.627-.3-7.355-.394-7.867-.437-1.036.792-8.873,8.8-14.088,14.2l-.988,11.125c-.031.178-2.547,14.173,1.6,17.382a15.348,15.348,0,0,0,3.181,2.115.4.4,0,0,1,.747-.005A.744.744,0,0,1,326.6,355.487Zm9.311-45.216a.4.4,0,0,0,.08.012A.646.646,0,0,1,335.909,310.27Z" transform="translate(-319.431 -309.475)" fill="#2c2826"/></g><g id="Group_1273" data-name="Group 1273" transform="translate(270.538 237.838)"><path id="Path_5245" data-name="Path 5245" d="M337.169,286.191c28.589,4.649,40.813,3.445,45.422,15.948s4.071,24.41,12.81,28.821a63.637,63.637,0,0,1-34.761-16.393s3.127,13.346,2.034,15.109c0,0-15.439-17.808-23.16-20.635s-9.629-5.92-9.629-5.92-1.038,13.862-6.592,20.852-6.179,19.479-5.133,23.47c0,0-6.946-5.136-6.737-12.175s-9.056-9.38-10.792-11.392-8.962-16.409-7.7-18.352" transform="translate(-292.788 -286.191)" fill="#2c2826"/></g><g id="Group_1274" data-name="Group 1274" transform="translate(311.513 270.706)"><ellipse id="Ellipse_156" data-name="Ellipse 156" cx="3.161" cy="1.765" rx="3.161" ry="1.765" transform="translate(0 6.237) rotate(-80.547)" fill="#2c2826"/></g><g id="Group_1275" data-name="Group 1275" transform="translate(343.014 280.869)"><ellipse id="Ellipse_157" data-name="Ellipse 157" cx="3.161" cy="1.765" rx="3.161" ry="1.765" transform="translate(0 6.237) rotate(-80.547)"/></g><g id="Group_1276" data-name="Group 1276" transform="translate(329.701 280.567)"><path id="Path_5246" data-name="Path 5246" d="M441.281,393.592s2.308-.43,2.7,1.362-2.951,2.3-2.951,2.3" transform="translate(-440.628 -393.139)" fill="#fff" fill-rule="evenodd"/><path id="Path_5247" data-name="Path 5247" d="M440.431,397.045a.4.4,0,0,1-.06-.8,4.378,4.378,0,0,0,2.49-1.15.8.8,0,0,0,.129-.663c-.3-1.386-2.156-1.067-2.234-1.052a.4.4,0,0,1-.146-.79c.929-.172,2.79-.047,3.165,1.671a1.6,1.6,0,0,1-.252,1.291c-.768,1.117-2.8,1.453-3.032,1.488A.391.391,0,0,1,440.431,397.045Z" transform="translate(-440.029 -392.533)" fill="#2c2826"/></g><g id="Group_1277" data-name="Group 1277" transform="translate(308.53 264.295)"><path id="Path_5248" data-name="Path 5248" d="M395.659,354.648a2.3,2.3,0,0,0,1.352-.3,2.575,2.575,0,0,0,.937-1.8c-.068-.246-.367.2-1.7-.189-1.306-.385-6.038-1.095-8.725,2.562-.462.631.008,1.005.657.682A8.921,8.921,0,0,1,395.659,354.648Z" transform="translate(-387.342 -352.038)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1278" data-name="Group 1278" transform="translate(342.19 276.403)"><path id="Path_5249" data-name="Path 5249" d="M473.276,384.674a2.3,2.3,0,0,1-1.33-.385,2.577,2.577,0,0,1-.821-1.855c.083-.242.354.225,1.7-.081,1.328-.3,6.1-.708,8.544,3.113.421.659-.072,1-.7.638A8.92,8.92,0,0,0,473.276,384.674Z" transform="translate(-471.112 -382.171)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1279" data-name="Group 1279" transform="translate(325.955 306.928)"><path id="Path_5250" data-name="Path 5250" d="M431.707,460.1a5.31,5.31,0,0,1,6.675.43" transform="translate(-431.305 -458.729)" fill="#fff" fill-rule="evenodd"/><path id="Path_5251" data-name="Path 5251" d="M437.783,460.347a.4.4,0,0,1-.286-.119,4.88,4.88,0,0,0-6.174-.373.4.4,0,1,1-.43-.679,5.754,5.754,0,0,1,7.176.487.4.4,0,0,1-.286.684Z" transform="translate(-430.706 -458.14)" fill="#2c2826"/></g><g id="Group_1280" data-name="Group 1280" transform="translate(266.177 230.643)"><path id="Path_5252" data-name="Path 5252" d="M297.507,298.65c8.58-10.122,19.212-18.916,50.676-16.392s31.2,16.651,31.2,16.651,3.255-16.921-15.669-24.682-46.357-7.92-63.446,10.868-17.332,27.265-17.332,27.265l.751,6.02S293.532,303.34,297.507,298.65Z" transform="translate(-282.534 -268.885)" fill="#fff"/><path id="Path_5253" data-name="Path 5253" d="M283.088,318.183a.41.41,0,0,1-.091-.01.4.4,0,0,1-.308-.341l-.751-6.021a.442.442,0,0,1,0-.061c.01-.352.443-8.84,17.437-27.524,7.886-8.67,18.7-14.036,31.284-15.519a66.825,66.825,0,0,1,32.611,4.549c19.008,7.8,15.944,24.957,15.911,25.129a.4.4,0,0,1-.8-.083c0-.033,0-3.46-3.743-7.147-6.324-6.229-18.22-8.385-27.086-9.1-14.3-1.147-25.333-.027-33.734,3.425-7.726,3.174-12.546,8.041-16.6,12.827-3.914,4.617-13.693,19.541-13.791,19.692A.4.4,0,0,1,283.088,318.183Zm-.348-6.439.612,4.906c2.2-3.335,9.873-14.875,13.251-18.859l.307.26-.307-.26c8.284-9.772,19.043-19.1,51.015-16.533,13.146,1.055,22.449,4.214,27.65,9.388a14.072,14.072,0,0,1,3.324,4.934,22.665,22.665,0,0,0-.941-6.621c-1.4-4.649-5.077-11.018-14.689-14.96-19.287-7.91-46.247-7.648-63,10.767C286.626,299.434,282.87,308.8,282.74,311.743Z" transform="translate(-281.936 -268.285)" fill="#2c2826"/></g><g id="Group_1286" data-name="Group 1286" transform="translate(306.431 210.994)"><g id="Group_1281" data-name="Group 1281" transform="translate(0 6.091)"><path id="Path_5254" data-name="Path 5254" d="M393.442,235.607c-5.831,1.462-14.86,17.871-7.6,23.554,5.086,3.982,14.171,4.676,17.852,3.075,4.34-1.887,12.15-12.945,11.169-15.2C412,240.448,396.691,234.793,393.442,235.607Z" transform="translate(-382.729 -235.133)" fill="#fff"/><path id="Path_5255" data-name="Path 5255" d="M398.09,262.836c-4.247,0-9.578-1.185-13.107-3.947-1.794-1.4-3.682-4.252-2.494-9.847,1.366-6.431,6.344-13.435,10.244-14.413h0c3.413-.859,18.98,4.974,21.887,11.658.8,1.848-2.884,7.1-3.632,8.134-2.155,2.98-5.32,6.541-7.746,7.6A13.664,13.664,0,0,1,398.09,262.836Zm-5.161-27.428h0c-3.584.9-8.365,7.735-9.653,13.8-.608,2.865-.72,6.759,2.2,9.048,5.054,3.955,13.928,4.551,17.445,3.023,1.876-.815,4.786-3.692,7.415-7.329,2.762-3.822,3.875-6.587,3.546-7.343C411.122,240.256,395.95,234.655,392.929,235.408Z" transform="translate(-382.118 -234.544)" fill="#2c2826"/></g><g id="Group_1282" data-name="Group 1282" transform="translate(5.654 5.024)"><path id="Path_5256" data-name="Path 5256" d="M403.226,233.148c-5.832,1.462-9.137,9.584-1.877,15.267,5.086,3.982,14.171,4.676,17.852,3.075,4.34-1.887,6.821-8.643.207-13.766C413.728,233.324,406.475,232.333,403.226,233.148Z" transform="translate(-396.79 -232.487)" fill="#fff"/><path id="Path_5257" data-name="Path 5257" d="M413.608,252.081c-4.247,0-9.578-1.185-13.107-3.948-3.356-2.627-4.862-6.108-4.131-9.549a8.457,8.457,0,0,1,6.158-6.424h0a16.9,16.9,0,0,1,7.37.332,24.23,24.23,0,0,1,9.156,4.316c3.067,2.375,4.544,5.366,4.162,8.423a7.7,7.7,0,0,1-4.455,6.03A13.665,13.665,0,0,1,413.608,252.081ZM402.724,232.94h0a7.649,7.649,0,0,0-5.567,5.812c-.665,3.129.735,6.318,3.84,8.749,5.054,3.956,13.928,4.552,17.445,3.023a6.886,6.886,0,0,0,3.978-5.392c.346-2.764-1.024-5.494-3.857-7.688C412.924,233.077,405.778,232.175,402.724,232.94Z" transform="translate(-396.189 -231.889)" fill="#2c2826"/></g><g id="Group_1283" data-name="Group 1283" transform="translate(13.416 0.572)"><path id="Path_5258" data-name="Path 5258" d="M424.019,221.842c-3.122.783-10.275,12.651-6.388,15.694,2.723,2.132,6.026,2.387,8,1.53,2.324-1.01,10.385-9.9,9.86-11.105C433.953,224.433,425.758,221.406,424.019,221.842Z" transform="translate(-416.102 -221.402)" fill="#fff"/><path id="Path_5259" data-name="Path 5259" d="M422.589,239.33a9.486,9.486,0,0,1-5.8-2.07c-1.194-.934-1.562-2.664-1.066-5,.956-4.5,5.149-10.785,7.6-11.4,1.911-.484,10.305,2.6,11.934,6.347.728,1.675-7.933,10.706-10.068,11.634A6.615,6.615,0,0,1,422.589,239.33Zm1.29-17.727a1.494,1.494,0,0,0-.359.036h0c-2.312.579-6.214,7.022-7.014,10.787-.3,1.406-.407,3.275.775,4.2a7.892,7.892,0,0,0,7.589,1.478c.972-.423,3.32-2.567,5.711-5.213,2.932-3.246,3.967-5.031,3.932-5.393C433.158,224.392,426.053,221.6,423.879,221.6Zm-.456-.354h0Z" transform="translate(-415.506 -220.81)"/></g><g id="Group_1284" data-name="Group 1284" transform="translate(18.437 0)"><path id="Path_5260" data-name="Path 5260" d="M432.236,220.525c-3.122.783-4.892,5.131-1,8.173,2.723,2.132,7.587,2.5,9.557,1.647,2.324-1.011,3.652-4.628.111-7.37C437.858,220.619,433.975,220.089,432.236,220.525Z" transform="translate(-428.603 -219.984)" fill="#fff"/><path id="Path_5261" data-name="Path 5261" d="M437.525,230.565a12.218,12.218,0,0,1-7.141-2.148,5.313,5.313,0,0,1-2.279-5.3,4.715,4.715,0,0,1,3.434-3.581h0c1.8-.452,5.791.031,9.007,2.521a5.139,5.139,0,0,1,2.3,4.681,4.314,4.314,0,0,1-2.5,3.376A7.48,7.48,0,0,1,437.525,230.565Zm-5.791-10.249h0a3.908,3.908,0,0,0-2.843,2.969,4.543,4.543,0,0,0,1.988,4.5c2.612,2.045,7.351,2.377,9.15,1.594a3.5,3.5,0,0,0,2.019-2.739,4.373,4.373,0,0,0-1.994-3.945C437.084,220.394,433.334,219.917,431.733,220.316Z" transform="translate(-428.003 -219.386)" fill="#2c2826"/></g><g id="Group_1285" data-name="Group 1285" transform="translate(20.905 1.826)"><path id="Path_5262" data-name="Path 5262" d="M437.246,225.018c-2.028.509-3.177,3.333-.653,5.309A7.508,7.508,0,0,0,442.8,231.4c1.509-.656,2.372-3.006.072-4.787A7.615,7.615,0,0,0,437.246,225.018Z" transform="translate(-434.745 -224.527)" fill="#fff"/><path id="Path_5263" data-name="Path 5263" d="M440.46,231.486a8.111,8.111,0,0,1-4.714-1.439,3.587,3.587,0,0,1-1.532-3.581,3.205,3.205,0,0,1,2.334-2.433h0a7.961,7.961,0,0,1,5.971,1.663,3.414,3.414,0,0,1,1.547,3.169,2.946,2.946,0,0,1-1.7,2.3A4.939,4.939,0,0,1,440.46,231.486Zm-3.717-6.675A2.4,2.4,0,0,0,435,226.633a2.733,2.733,0,0,0,1.241,2.782,7.138,7.138,0,0,0,5.8,1.017,2.129,2.129,0,0,0,1.228-1.667,2.71,2.71,0,0,0-1.242-2.433,7.2,7.2,0,0,0-5.284-1.519Zm-.1-.39h0Z" transform="translate(-434.145 -223.931)" fill="#2c2826"/></g></g><g id="Group_1292" data-name="Group 1292" transform="translate(338.692 218.726)"><g id="Group_1287" data-name="Group 1287" transform="translate(0 5.098)"><path id="Path_5264" data-name="Path 5264" d="M472.025,252.372c-4.883,1.224-12.443,14.965-6.364,19.724,4.259,3.334,11.866,3.916,14.949,2.575,3.635-1.58,10.174-10.84,9.353-12.729C487.564,256.425,474.745,251.69,472.025,252.372Z" transform="translate(-463 -251.908)" fill="#fff"/><path id="Path_5265" data-name="Path 5265" d="M475.84,275.137c-3.572,0-8.053-1-11.019-3.318-2.144-1.678-2.894-4.63-2.112-8.312,1.148-5.4,5.34-11.293,8.626-12.118h0c2.944-.736,15.89,4.019,18.4,9.8.964,2.217-5.827,11.634-9.561,13.258A11.51,11.51,0,0,1,475.84,275.137Zm-3.74-23.026a2.422,2.422,0,0,0-.57.057h0c-2.981.748-6.961,6.446-8.035,11.506-.506,2.381-.6,5.616,1.821,7.512,4.215,3.3,11.611,3.8,14.542,2.523,3.753-1.632,9.776-10.749,9.144-12.2C486.839,256.535,475.554,252.111,472.1,252.111Zm-.668-.332h0Z" transform="translate(-462.407 -251.314)" fill="#2c2826"/></g><g id="Group_1288" data-name="Group 1288" transform="translate(4.724 4.206)"><path id="Path_5266" data-name="Path 5266" d="M480.218,250.313c-4.883,1.224-7.651,8.025-1.572,12.784,4.259,3.334,11.866,3.916,14.949,2.575,3.634-1.581,5.712-7.238.173-11.528C489.013,250.461,482.939,249.631,480.218,250.313Z" transform="translate(-474.763 -249.694)" fill="#fff"/><path id="Path_5267" data-name="Path 5267" d="M488.817,266.133c-3.572,0-8.053-1-11.019-3.318-2.831-2.216-4.1-5.154-3.482-8.061a7.146,7.146,0,0,1,5.2-5.429h0a14.215,14.215,0,0,1,6.2.277,20.367,20.367,0,0,1,7.691,3.626c2.587,2,3.834,4.53,3.511,7.114a6.517,6.517,0,0,1-3.769,5.1A11.5,11.5,0,0,1,488.817,266.133Zm-9.1-16.029h0a6.339,6.339,0,0,0-4.614,4.817c-.551,2.6.612,5.242,3.192,7.262,4.215,3.3,11.612,3.8,14.542,2.523a5.7,5.7,0,0,0,3.292-4.463c.286-2.29-.851-4.555-3.2-6.378C488.219,250.221,482.26,249.468,479.716,250.1Z" transform="translate(-474.163 -249.096)" fill="#2c2826"/></g><g id="Group_1289" data-name="Group 1289" transform="translate(11.223 0.481)"><path id="Path_5268" data-name="Path 5268" d="M497.63,240.846c-2.614.655-8.6,10.594-5.349,13.142a6.977,6.977,0,0,0,6.7,1.281c1.946-.846,8.7-8.288,8.256-9.3C505.949,243.015,499.086,240.48,497.63,240.846Z" transform="translate(-490.935 -240.414)" fill="#fff"/><path id="Path_5269" data-name="Path 5269" d="M496.335,255.461a8.006,8.006,0,0,1-4.9-1.747c-1.021-.8-1.338-2.269-.917-4.252.8-3.785,4.342-9.076,6.416-9.6h0c1.611-.405,8.7,2.195,10.069,5.353.283.65-.828,2.38-3.3,5.14-1.787,1.993-4.076,4.216-5.162,4.688A5.6,5.6,0,0,1,496.335,255.461Zm.8-14.816c-1.633.41-5.043,5.3-5.825,8.984-.246,1.158-.338,2.7.626,3.452a6.544,6.544,0,0,0,6.288,1.229c1.946-.846,7.993-7.743,8.035-8.8-1.24-2.761-7.814-5.193-9.124-4.865Zm9.124,4.847Z" transform="translate(-490.339 -239.824)" fill="#2c2826"/></g><g id="Group_1290" data-name="Group 1290" transform="translate(15.428 0)"><path id="Path_5270" data-name="Path 5270" d="M504.51,239.743c-2.615.655-4.1,4.3-.842,6.844,2.28,1.785,6.353,2.1,8,1.379,1.946-.846,3.058-3.875.093-6.172A9.817,9.817,0,0,0,504.51,239.743Z" transform="translate(-501.403 -239.225)" fill="#fff"/><path id="Path_5271" data-name="Path 5271" d="M508.791,248.128a10.1,10.1,0,0,1-5.97-1.823,4.511,4.511,0,0,1-1.932-4.5,4.014,4.014,0,0,1,2.923-3.049h0a10.137,10.137,0,0,1,7.6,2.123,4.291,4.291,0,0,1,1.95,3.98,3.68,3.68,0,0,1-2.129,2.879A6.478,6.478,0,0,1,508.791,248.128Zm-3.763-8.7a4.3,4.3,0,0,0-1.021.106h0a3.2,3.2,0,0,0-2.332,2.436,3.741,3.741,0,0,0,1.641,3.7c2.169,1.7,6.1,1.976,7.6,1.327a2.862,2.862,0,0,0,1.652-2.242,3.6,3.6,0,0,0-1.645-3.244A10.159,10.159,0,0,0,505.029,239.429Zm-1.118-.284h0Z" transform="translate(-500.803 -238.627)" fill="#2c2826"/></g><g id="Group_1291" data-name="Group 1291" transform="translate(17.494 1.53)"><path id="Path_5272" data-name="Path 5272" d="M508.706,243.505c-1.7.426-2.66,2.791-.546,4.446a6.289,6.289,0,0,0,5.2.9c1.264-.55,1.986-2.517.06-4.008A6.374,6.374,0,0,0,508.706,243.505Z" transform="translate(-506.546 -243.03)" fill="#fff"/><path id="Path_5273" data-name="Path 5273" d="M511.3,248.889a6.864,6.864,0,0,1-3.991-1.217,3.066,3.066,0,0,1-1.306-3.064,2.749,2.749,0,0,1,2-2.088h0a6.747,6.747,0,0,1,5.056,1.4,2.92,2.92,0,0,1,1.32,2.713,2.533,2.533,0,0,1-1.466,1.981A4.2,4.2,0,0,1,511.3,248.889Zm-3.1-5.59h0a1.941,1.941,0,0,0-1.412,1.475,2.226,2.226,0,0,0,1.015,2.265,5.9,5.9,0,0,0,4.791.843,1.717,1.717,0,0,0,.989-1.344,2.2,2.2,0,0,0-1.015-1.978A5.957,5.957,0,0,0,508.2,243.3Z" transform="translate(-505.946 -242.434)" fill="#2c2826"/></g></g><g id="Group_1293" data-name="Group 1293" transform="translate(327.414 252.328)"><path id="Path_5274" data-name="Path 5274" d="M463.923,397.9c-.192.136,11.461.136,11.009-.23-.107-.671-17.114-39.732-18.433-43.03-.8-2.009-.292-6.062.357-6.761,1.147-1.236,2.273-2.5,3.313-3.823a4.4,4.4,0,0,0,.788-1.864,16.454,16.454,0,0,1,3.241-6.4,1.042,1.042,0,0,0-.209-.931,2.785,2.785,0,0,0-1.632-.19,5.679,5.679,0,0,0-3.523,3.6,3.928,3.928,0,0,1-.853,1.478c-.928.826-2.605-.064-2.991-1.455a12.523,12.523,0,0,1,.147-5.643c.4-2.3.608-4.634.855-6.958a1.224,1.224,0,0,0-1.087-1.345c-.716-.046-1.008.4-1.151,1.044-.605,2.739-1.235,5.472-1.851,8.208-.2.884-.913.9-1.722,1.031-.04-.7-.045-1.35-.122-1.995-.246-2.06-.523-4.115-.777-6.174-.078-.629-.132-1.262-.176-1.894a1.269,1.269,0,0,0-1.631-1.27.871.871,0,0,0-.77.992c.047,2.2.022,4.407.107,6.608.039.99.291,1.97.407,2.959a2.353,2.353,0,0,1-.157.731c-.177-.167-.417-.3-.522-.505q-2.052-3.953-4.067-7.925c-.37-.728-.985-.651-1.571-.444-.613.217-.7.747-.485,1.3.984,2.507,1.988,5.006,2.974,7.512a11.662,11.662,0,0,1,.519,1.569c.052.222,0,.608-.143.7a.941.941,0,0,1-.813.073,17.723,17.723,0,0,1-5.195-3.765,2.643,2.643,0,0,0-1.2-.836,1.384,1.384,0,0,0-1.12.359,1.026,1.026,0,0,0,.078.992c1.264,1.377,2.53,2.762,3.91,4.018a14.1,14.1,0,0,1,4.392,6.435,13.931,13.931,0,0,0,1.258,2.869c.743,1.316,2.184,5.283,2.987,7.292C448.562,355.486,460.517,390.8,463.923,397.9Z" transform="translate(-434.937 -322.85)" fill="#fff"/><path id="Path_5275" data-name="Path 5275" d="M466.878,397.784c-1.183,0-2.251-.011-2.931-.033-.7-.022-.915-.029-1.008-.327-2.721-5.7-10.762-28.959-14.2-38.9-.9-2.6-1.549-4.478-1.651-4.734-.213-.534-.472-1.205-.75-1.928-.749-1.949-1.682-4.374-2.214-5.316a14.159,14.159,0,0,1-1.294-2.953,13.54,13.54,0,0,0-4.277-6.252c-1.357-1.235-2.617-2.607-3.836-3.935l-.1-.109a1.352,1.352,0,0,1-.064-1.55,1.771,1.771,0,0,1,1.508-.459,3.1,3.1,0,0,1,1.4.961,17.135,17.135,0,0,0,5.083,3.675.615.615,0,0,0,.356-.034.7.7,0,0,0,.016-.3,11.211,11.211,0,0,0-.5-1.514q-.7-1.782-1.41-3.56-.785-1.975-1.564-3.952a1.493,1.493,0,0,1-.027-1.18,1.237,1.237,0,0,1,.753-.65,1.482,1.482,0,0,1,2.062.642c1.541,3.028,2.8,5.489,3.963,7.724-.042-.309-.1-.622-.148-.925a14.179,14.179,0,0,1-.235-1.86c-.051-1.331-.063-2.683-.074-3.991-.007-.875-.014-1.75-.033-2.624a1.272,1.272,0,0,1,1.086-1.393,1.741,1.741,0,0,1,1.441.263,1.824,1.824,0,0,1,.677,1.371c.049.719.1,1.314.173,1.872q.162,1.31.331,2.617c.152,1.186.3,2.371.446,3.559.054.454.073.9.093,1.372,0,.068.006.136.009.2.625-.1.85-.21.95-.654q.333-1.476.668-2.951c.4-1.751.8-3.5,1.182-5.255.211-.955.739-1.414,1.569-1.358a1.559,1.559,0,0,1,1.08.562,1.643,1.643,0,0,1,.381,1.226l-.125,1.2c-.2,1.9-.4,3.867-.734,5.784l-.026.149a11.819,11.819,0,0,0-.129,5.317,2.136,2.136,0,0,0,1.373,1.422.987.987,0,0,0,.964-.159,3.648,3.648,0,0,0,.745-1.32,6.035,6.035,0,0,1,3.776-3.843,2.982,2.982,0,0,1,1.889.195c.226.08.387.329.477.741.133.606-.058.794-.121.856a8.972,8.972,0,0,0-1.485,2.161c-.088.159-.176.318-.267.477a11.231,11.231,0,0,0-1.374,3.55,4.766,4.766,0,0,1-.867,2.039c-1.149,1.465-2.386,2.826-3.335,3.849-.479.516-1.069,4.361-.278,6.339.567,1.417,4.1,9.593,7.836,18.25C471.527,389.317,474.4,396,474.7,396.911a.434.434,0,0,1,.018.323c-.115.31-.168.451-4.727.525C468.986,397.775,467.89,397.784,466.878,397.784Zm-3.281-.848c1.356.1,8.475.055,10.217-.129-.876-2.195-6.147-14.4-10.443-24.349-3.741-8.661-7.274-16.844-7.845-18.27-.62-1.551-.605-6.062.436-7.184.939-1.011,2.161-2.357,3.292-3.8a4,4,0,0,0,.71-1.69,12.014,12.014,0,0,1,1.466-3.8q.133-.234.262-.469a10.042,10.042,0,0,1,1.552-2.271,1.331,1.331,0,0,0-.084-.373,2.242,2.242,0,0,0-1.279-.154,5.277,5.277,0,0,0-3.273,3.37,4.225,4.225,0,0,1-.958,1.628,1.781,1.781,0,0,1-1.725.329A2.939,2.939,0,0,1,454,337.8a12.6,12.6,0,0,1,.112-5.67l.026-.149c.329-1.89.531-3.841.726-5.729l.125-1.2a.827.827,0,0,0-.2-.624.756.756,0,0,0-.518-.278c-.369-.024-.59.086-.732.729q-.582,2.631-1.184,5.26-.334,1.475-.668,2.95c-.241,1.069-1.085,1.2-1.829,1.305l-.22.034a.4.4,0,0,1-.465-.374c-.013-.223-.022-.443-.032-.659-.019-.456-.038-.887-.088-1.311-.141-1.185-.293-2.368-.445-3.551-.112-.874-.224-1.747-.331-2.621-.071-.573-.128-1.182-.178-1.916a1.027,1.027,0,0,0-.358-.784.946.946,0,0,0-.788-.121c-.356.078-.462.216-.454.591.019.878.026,1.756.033,2.635.011,1.3.022,2.648.073,3.966a13.418,13.418,0,0,0,.224,1.756c.065.382.133.776.18,1.172a1.552,1.552,0,0,1-.105.668c-.021.067-.043.134-.059.2a.4.4,0,0,1-.667.2c-.049-.046-.1-.088-.156-.131a1.539,1.539,0,0,1-.448-.483c-1.188-2.289-2.48-4.808-4.068-7.928-.176-.346-.4-.488-1.078-.248a.46.46,0,0,0-.29.225.743.743,0,0,0,.044.552q.776,1.977,1.563,3.949.708,1.78,1.412,3.563a11.946,11.946,0,0,1,.536,1.623,1.151,1.151,0,0,1-.313,1.133,1.337,1.337,0,0,1-1.227.089,18.31,18.31,0,0,1-5.306-3.856,2.234,2.234,0,0,0-1-.71,1.03,1.03,0,0,0-.7.228.88.88,0,0,0,.065.468l.1.1c1.206,1.314,2.453,2.673,3.784,3.884a14.286,14.286,0,0,1,4.507,6.618,13.37,13.37,0,0,0,1.223,2.785,56.926,56.926,0,0,1,2.265,5.422c.277.72.534,1.387.746,1.918.109.273.694,1.965,1.664,4.769C452.905,368.109,460.833,391.039,463.6,396.936Zm-.279-62.035h0Zm-28.161-2.639Z" transform="translate(-434.338 -322.253)" fill="#2c2826"/></g></g></svg>
        <label for="checkbox-0">Konnte nicht abgeschlossen werden</label>
      </div>
    </button>
		
		<div class="robo-wiki-feedback-form__wrapper" data-form="Couldn&#39;t complete">

    <div class="robo-wiki-feedback-form__header">
      <div>
        <span class="robo-wiki-feedback-form__check">
        </span>
        <h3>Konnte nicht abgeschlossen werden</h3>
      </div>

			
      <span tabindex="0" class="robo-wiki-feedback-form__close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </span>
    </div>

    <form class="robo-wiki-feedback-form__form">

			<h-captcha id="signupCaptcha"
				site-key=""
				size="invisible"
				tabindex="0"
        jsapi="https://js.hcaptcha.com/1/api.js?onload=onLoad" 
      >
      </h-captcha>

      <div>
        <input type="email" placeholder="Your email" data-gsp-name="Email (optional)" required />

        <textarea placeholder="Your comment" data-gsp-name="Feedback (optional)"></textarea>

        <input
          type="hidden"
          placeholder="location"
					data-gsp-name="Location"
					value="https://wiki.robonomics.network/de/docs/docs.11tydata.js"
        />

        <input
          type="hidden"
          placeholder="reaction"
					data-gsp-name="Reaction"
					value="Couldn&#39;t complete"
        />

        <button class="robo-wiki-feedback-form__btn">
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--init">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span>Erzählen Sie uns mehr</span>
          </div>
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--wait hide">
						  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="194px" height="194px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="loader">
    <g transform="rotate(0 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-1.0784313725490198s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.9803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.8823529411764707s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.7843137254901962s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.6862745098039216s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.5882352941176471s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.4901960784313726s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.3921568627450981s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.29411764705882354s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.19607843137254904s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.09803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
  </svg>
            <span>Ihre Informationen werden gesendet...</span>
          </div>
        </button>
      </div>
    </form>

		
    <div class="robo-wiki-feedback-form__success hide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      <div>Danke,<br/> Wir bleiben in Kontakt! </div>
    </div>

  </div>
  </div>
		
			
			
			
			
	<div tabindex="0"  class="robo-wiki-feedback__wrapper">
    <button class="robo-wiki-feedback__item" data-text="It was hard">
      <div class="robo-wiki-feedback__checkbox">
        <input id="checkbox-1" type="checkbox" name="checkbox" class="custom-checkbox__field" >
        <span class="custom-checkbox__content"></span>
      </div>
      <div class="robo-wiki-feedback__content">
				<svg xmlns="http://www.w3.org/2000/svg" width="115.767" height="122.798" viewBox="0 0 115.767 122.798" aria-hidden="true"   ><g id="Group_1321" data-name="Group 1321" transform="translate(-888.424 -206.557)"><g id="Group_1298" data-name="Group 1298" transform="translate(888.424 206.557)"><path id="Path_5276" data-name="Path 5276" d="M930.832,303.905c-.161.684-14.236,8-19.006,8.33,0,0,5.134-14.395,2.986-11.5-5.224,7.036-20.845,2.805-20.845,2.805s13.285-7.822,9.982-14.319c0,0-11.147,5.087-14.991,4.548s14.472-7.127,9.69-19.077,2.337-38.155,19.174-46.845,9.467-21.288,9.467-21.288,7.585,13.823,6.66,14.69,10.741-5.787,10.939-9.712,2.241,7.384,2.241,7.384,29.392-1.848,38.639,18.436,14.63,24.071,18.035,24.835-16.672.825-19.409-4,3.11,31.087,10.938,35.584-19.933-1.439-20.8-1.926S930.832,303.905,930.832,303.905Z" transform="translate(-888.424 -206.557)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1299" data-name="Group 1299" transform="translate(932.18 298.687)"><path id="Path_5277" data-name="Path 5277" d="M1003.032,447.367c.966,2.919.323,27.268.323,27.268s7.568,3.263,13.043,1.527c4.407-1.4,5.666-3.483,5.666-3.483a80.571,80.571,0,0,1,.277-18.437C1023.656,443.827,1003.032,447.367,1003.032,447.367Z" transform="translate(-1002.647 -446.392)" fill="#fff" fill-rule="evenodd"/><path id="Path_5278" data-name="Path 5278" d="M1012.121,476.43a27.388,27.388,0,0,1-9.533-2.072.385.385,0,0,1-.233-.364c.222-8.4.444-24.878-.3-27.137a.385.385,0,0,1,.3-.5c.546-.094,13.428-2.244,18.129,2.253a5.638,5.638,0,0,1,1.628,5.05,80.986,80.986,0,0,0-.278,18.34.387.387,0,0,1-.052.248c-.055.09-1.386,2.227-5.88,3.652A12.549,12.549,0,0,1,1012.121,476.43Zm-8.989-2.682c1.318.525,7.8,2.919,12.535,1.417,3.643-1.155,5.067-2.8,5.383-3.217a82.761,82.761,0,0,1,.3-18.385,4.847,4.847,0,0,0-1.4-4.4c-3.975-3.8-14.818-2.443-17.058-2.115C1003.674,451.163,1003.2,471.069,1003.132,473.748Z" transform="translate(-1002.032 -445.761)" fill="#2c2826"/></g><g id="Group_1300" data-name="Group 1300" transform="translate(912.671 246.66)"><path id="Path_5279" data-name="Path 5279" d="M958.75,355.41s.714,9.869,8.405,15.755,15.079,9.243,27.848,8.171,23.443-13.209,27.754-29.067,1.906-21.872,1.906-21.872-20.443-15.014-21.8-15.435-35.47-1.192-35.812-1.273-13.43,14.182-13.43,14.182l-.681,10.82s-2.172,13.8,2.117,16.951S958.75,355.41,958.75,355.41Z" transform="translate(-952.002 -311.301)" fill="#fff"/><path id="Path_5280" data-name="Path 5280" d="M989.822,379.3c-10.256,0-16.767-3.28-23.524-8.451-6.594-5.045-8.157-13.058-8.479-15.381-.517-.084-1.5-.583-3.61-2.135-4.427-3.249-2.36-16.749-2.27-17.322l.677-10.785a.381.381,0,0,1,.1-.236c.033-.036,3.31-3.607,6.588-7.123,6.783-7.275,6.9-7.249,7.213-7.173.2.019,3.45.108,7.565.221,13.8.379,27.352.772,28.273,1.059,1.378.428,19.816,13.952,21.914,15.493a.386.386,0,0,1,.13.167,15.969,15.969,0,0,1,.691,5.126c.057,3.206-.344,8.755-2.583,16.991-4.562,16.78-15.589,28.3-28.094,29.349C992.8,379.235,991.274,379.3,989.822,379.3ZM958.536,355c.174,1.532,1.43,10.033,8.23,15.236,7.567,5.791,14.821,9.165,27.582,8.094,12.178-1.022,22.939-12.321,27.415-28.784,3.925-14.436,2.223-20.7,1.953-21.531-8.189-6.013-20.628-15-21.589-15.307-.961-.281-18.594-.765-28.066-1.025-5.39-.148-7.046-.2-7.537-.224-.973.785-8.285,8.651-13.149,13.95L952.7,336.1c-.025.171-2.091,13.644,1.961,16.617a14.719,14.719,0,0,0,3.1,1.947.385.385,0,0,1,.716-.023A.717.717,0,0,1,958.536,355Zm7.806-43.557a.354.354,0,0,0,.078.01A.531.531,0,0,1,966.342,311.444Z" transform="translate(-951.379 -310.68)" fill="#2c2826"/></g><g id="Group_1301" data-name="Group 1301" transform="translate(901.83 237.274)"><path id="Path_5281" data-name="Path 5281" d="M965.264,286.309c27.509,3.749,39.194,2.294,43.918,14.16s4.5,23.289,12.986,27.3c0,0-19.937-1.3-35.091-15,0,0-.152,9.453-1.155,11.169,0,0-10.378-13.27-17.846-15.788s-9.373-5.435-9.373-5.435-.652,13.309-5.8,20.144-5.44,18.817-4.339,22.616c0,0-6.783-4.75-6.756-11.5s-8.908-8.765-10.622-10.649-8.993-15.5-7.828-17.395" transform="translate(-923.23 -286.309)" fill="#2c2826"/></g><g id="Group_1302" data-name="Group 1302" transform="translate(941.565 268.057)"><ellipse id="Ellipse_158" data-name="Ellipse 158" cx="3.03" cy="1.691" rx="3.03" ry="1.691" transform="translate(0 6.002) rotate(-82.023)" fill="#2c2826"/></g><g id="Group_1303" data-name="Group 1303" transform="translate(970.46 273.166)"><ellipse id="Ellipse_159" data-name="Ellipse 159" cx="3.03" cy="1.691" rx="3.03" ry="1.691" transform="translate(0 6.002) rotate(-82.023)" fill="#2c2826"/></g><g id="Group_1304" data-name="Group 1304" transform="translate(959.184 277.821)"><path id="Path_5282" data-name="Path 5282" d="M1073.294,392.658s2.2-.469,2.621,1.238-2.771,2.273-2.771,2.273" transform="translate(-1072.758 -392.208)" fill="#fff" fill-rule="evenodd"/><path id="Path_5283" data-name="Path 5283" d="M1072.528,395.931a.385.385,0,0,1-.067-.764,4.2,4.2,0,0,0,2.358-1.163.766.766,0,0,0,.107-.639c-.327-1.33-2.092-.97-2.167-.953a.385.385,0,0,1-.16-.754c.886-.188,2.673-.114,3.075,1.524a1.53,1.53,0,0,1-.209,1.244c-.709,1.089-2.65,1.462-2.869,1.5A.4.4,0,0,1,1072.528,395.931Z" transform="translate(-1072.143 -391.585)" fill="#2c2826"/></g><g id="Group_1305" data-name="Group 1305" transform="translate(939.528 260.266)"><path id="Path_5284" data-name="Path 5284" d="M1028.26,350.427a2.207,2.207,0,0,0,1.246.457,2.469,2.469,0,0,0,1.686-.969c.073-.234-.4-.026-1.272-1.029-.855-.985-4.309-4-8.368-2.438-.7.271-.513.816.178.89A8.551,8.551,0,0,1,1028.26,350.427Z" transform="translate(-1021.111 -346.006)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1306" data-name="Group 1306" transform="translate(969.448 269.961)"><path id="Path_5285" data-name="Path 5285" d="M1100.872,373.581a2.206,2.206,0,0,1-1.275-.365,2.47,2.47,0,0,1-.791-1.777c.079-.232.339.215,1.634-.081,1.272-.291,5.841-.691,8.2,2.966.4.631-.067.961-.669.614A8.553,8.553,0,0,0,1100.872,373.581Z" transform="translate(-1098.794 -371.179)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1307" data-name="Group 1307" transform="translate(955.966 294.357)"><path id="Path_5286" data-name="Path 5286" d="M1064.789,435.521c3.162.184,5.293.192,5.293.192" transform="translate(-1064.404 -435.135)" fill="#fff" fill-rule="evenodd"/><path id="Path_5287" data-name="Path 5287" d="M1069.467,435.483h0c-.021,0-2.177-.01-5.314-.193a.386.386,0,0,1-.362-.407.377.377,0,0,1,.407-.362c3.115.182,5.25.192,5.272.192a.385.385,0,0,1,0,.77Z" transform="translate(-1063.789 -434.52)" fill="#2c2826"/></g><g id="Group_1308" data-name="Group 1308" transform="translate(898.053 230.178)"><path id="Path_5288" data-name="Path 5288" d="M928.05,298.062c7.972-9.91,17.943-18.6,48.155-16.957s30.306,15.186,30.306,15.186,2.7-16.294-15.624-23.264-44.615-6.445-60.527,11.98-15.935,26.553-15.935,26.553l.868,5.75S924.356,302.654,928.05,298.062Z" transform="translate(-914.04 -268.506)" fill="#fff"/><path id="Path_5289" data-name="Path 5289" d="M914.678,317.075a.371.371,0,0,1-.077-.008.386.386,0,0,1-.3-.32l-.867-5.75a.415.415,0,0,1,0-.059c0-.338.206-8.481,16.029-26.8,7.342-8.5,17.576-13.911,29.595-15.642a64.015,64.015,0,0,1,31.36,3.555c18.407,7,15.894,23.521,15.867,23.687a.385.385,0,0,1-.765-.06c0-.032-.085-3.315-3.763-6.756-6.214-5.813-17.666-7.584-26.18-8.047-13.729-.745-24.275.6-32.241,4.114C936,288.215,931.5,293,927.735,297.683c-3.636,4.521-12.639,19.063-12.73,19.209A.385.385,0,0,1,914.678,317.075Zm-.482-6.162.707,4.686c2.027-3.25,9.094-14.5,12.232-18.4h0c7.7-9.568,17.772-18.771,48.476-17.1,12.623.686,21.615,3.483,26.726,8.313a13.48,13.48,0,0,1,3.307,4.646,21.734,21.734,0,0,0-1.065-6.321c-1.452-4.42-5.137-10.432-14.444-13.972-18.677-7.1-44.5-6.187-60.1,11.871C917.615,299.021,914.247,308.092,914.2,310.913Z" transform="translate(-913.425 -267.886)" fill="#2c2826"/></g><g id="Group_1314" data-name="Group 1314" transform="translate(935.653 211.181)"><g id="Group_1309" data-name="Group 1309" transform="translate(0 6.133)"><path id="Path_5290" data-name="Path 5290" d="M1021.518,235.563c-5.552,1.545-13.8,17.491-6.7,22.757,4.971,3.69,13.693,4.131,17.182,2.506,4.112-1.915,11.322-12.7,10.327-14.841C1039.418,239.743,1024.611,234.7,1021.518,235.563Z" transform="translate(-1011.675 -235.089)" fill="#fff"/><path id="Path_5291" data-name="Path 5291" d="M1026.039,261.493c-3.969,0-8.79-1.026-12.078-3.467-1.753-1.3-3.633-3.984-2.633-9.375,1.15-6.2,5.748-13.03,9.46-14.063,3.247-.9,18.31,4.3,21.26,10.631.815,1.75-2.589,6.875-3.28,7.884-1.99,2.909-4.936,6.4-7.234,7.469A13.85,13.85,0,0,1,1026.039,261.493Zm-5.147-26.533.1.371c-3.411.949-7.824,7.617-8.909,13.461-.512,2.76-.523,6.495,2.334,8.616,4.94,3.666,13.458,4.019,16.79,2.466,1.777-.828,4.495-3.656,6.923-7.206,2.553-3.73,3.551-6.407,3.217-7.124-2.8-6.018-17.477-11.018-20.356-10.213Z" transform="translate(-1011.049 -234.486)" fill="#2c2826"/></g><g id="Group_1310" data-name="Group 1310" transform="translate(5.162 5.03)"><path id="Path_5292" data-name="Path 5292" d="M1031.047,232.936c-5.552,1.545-8.519,9.408-1.422,14.675,4.971,3.69,13.694,4.131,17.182,2.506,4.113-1.915,6.323-8.45-.141-13.2C1041.115,232.846,1034.14,232.076,1031.047,232.936Z" transform="translate(-1025.068 -232.236)" fill="#fff"/><path id="Path_5293" data-name="Path 5293" d="M1040.857,250.773c-3.969,0-8.79-1.026-12.078-3.467s-4.809-5.733-4.194-9.048a8.107,8.107,0,0,1,5.742-6.308h0a16.2,16.2,0,0,1,7.07.136,23.228,23.228,0,0,1,8.88,3.91c3,2.2,4.487,5.03,4.2,7.968a7.385,7.385,0,0,1-4.121,5.887A13.849,13.849,0,0,1,1040.857,250.773Zm-10.323-18.08h0a7.331,7.331,0,0,0-5.191,5.706c-.56,3.015.86,6.036,3.9,8.289,4.94,3.666,13.457,4.019,16.79,2.466a6.6,6.6,0,0,0,3.679-5.265c.263-2.657-1.117-5.239-3.885-7.272C1040.311,232.572,1033.44,231.884,1030.533,232.693Z" transform="translate(-1024.451 -231.622)" fill="#2c2826"/></g><g id="Group_1311" data-name="Group 1311" transform="translate(12.611 0.593)"><path id="Path_5294" data-name="Path 5294" d="M1051.675,221.138c-2.972.827-9.534,12.376-5.734,15.2a7.987,7.987,0,0,0,7.7,1.268c2.2-1.026,9.707-9.74,9.174-10.885C1061.259,223.376,1053.331,220.677,1051.675,221.138Z" transform="translate(-1044.405 -220.707)" fill="#fff"/><path id="Path_5295" data-name="Path 5295" d="M1050.5,237.881a9.122,9.122,0,0,1-5.4-1.843c-1.167-.866-1.563-2.514-1.145-4.765.8-4.334,4.667-10.46,7.005-11.112h0c1.82-.5,9.94,2.24,11.593,5.788.41.88-1.741,3.694-3.617,5.9-1.98,2.327-4.524,4.929-5.743,5.5A6.457,6.457,0,0,1,1050.5,237.881Zm1.072-17.022a1.542,1.542,0,0,0-.41.045h0c-2.2.612-5.781,6.882-6.455,10.51-.251,1.354-.308,3.148.847,4.006a7.566,7.566,0,0,0,7.309,1.229c.92-.429,3.118-2.541,5.344-5.136,2.729-3.183,3.677-4.918,3.634-5.265C1060.484,223.334,1053.735,220.859,1051.576,220.859Zm-.513-.327h0Z" transform="translate(-1043.792 -220.102)" fill="#2c2826"/></g><g id="Group_1312" data-name="Group 1312" transform="translate(17.196)"><path id="Path_5296" data-name="Path 5296" d="M1059.693,219.732c-2.972.827-4.561,5.037-.761,7.857,2.662,1.975,7.331,2.212,9.2,1.342,2.2-1.026,3.385-4.524-.076-7.065C1065.084,219.683,1061.349,219.271,1059.693,219.732Z" transform="translate(-1056.313 -219.178)" fill="#fff"/><path id="Path_5297" data-name="Path 5297" d="M1064.666,229.168a11.578,11.578,0,0,1-6.58-1.886,5.092,5.092,0,0,1-2.314-5.02,4.521,4.521,0,0,1,3.2-3.517h0c1.717-.477,5.551-.113,8.693,2.194a4.926,4.926,0,0,1,2.319,4.428,4.136,4.136,0,0,1-2.308,3.3A7.584,7.584,0,0,1,1064.666,229.168Zm-5.486-9.681h0a3.744,3.744,0,0,0-2.651,2.915,4.355,4.355,0,0,0,2.016,4.261c2.553,1.894,7.1,2.094,8.807,1.3a3.352,3.352,0,0,0,1.867-2.675,4.193,4.193,0,0,0-2.008-3.731C1064.308,219.429,1060.7,219.064,1059.18,219.488Z" transform="translate(-1055.697 -218.562)" fill="#2c2826"/></g><g id="Group_1313" data-name="Group 1313" transform="translate(19.57 1.729)"><path id="Path_5298" data-name="Path 5298" d="M1064.806,224.159c-1.931.537-2.962,3.272-.495,5.1a7.2,7.2,0,0,0,5.975.872c1.43-.666,2.2-2.939-.049-4.589A7.3,7.3,0,0,0,1064.806,224.159Z" transform="translate(-1062.476 -223.666)" fill="#fff"/><path id="Path_5299" data-name="Path 5299" d="M1067.821,230.224a7.707,7.707,0,0,1-4.355-1.266,3.438,3.438,0,0,1-1.556-3.394,3.072,3.072,0,0,1,2.177-2.39h0a7.631,7.631,0,0,1,5.762,1.447,3.269,3.269,0,0,1,1.561,3,2.823,2.823,0,0,1-1.576,2.25A4.961,4.961,0,0,1,1067.821,230.224Zm-3.527-6.307h0a2.3,2.3,0,0,0-1.626,1.788,2.617,2.617,0,0,0,1.257,2.635,6.843,6.843,0,0,0,5.583.832,2.04,2.04,0,0,0,1.135-1.628,2.594,2.594,0,0,0-1.25-2.3A6.906,6.906,0,0,0,1064.294,223.917Z" transform="translate(-1061.86 -223.052)" fill="#2c2826"/></g></g><g id="Group_1320" data-name="Group 1320" transform="translate(966.662 217.886)"><g id="Group_1315" data-name="Group 1315" transform="translate(0 5.131)"><path id="Path_5300" data-name="Path 5300" d="M1100.466,250.37c-4.649,1.294-11.554,14.647-5.612,19.057,4.163,3.09,11.467,3.459,14.388,2.1,3.444-1.6,9.481-10.639,8.648-12.428C1115.455,253.87,1103.056,249.649,1100.466,250.37Z" transform="translate(-1092.17 -249.906)" fill="#fff"/><path id="Path_5301" data-name="Path 5301" d="M1104.169,272.038c-3.337,0-7.391-.863-10.154-2.914-2.1-1.555-2.887-4.365-2.229-7.912.967-5.207,4.839-10.954,7.967-11.825h0c2.8-.776,15.325,3.46,17.876,8.936.68,1.459-1.933,5.47-2.751,6.664-1.672,2.443-4.147,5.374-6.083,6.276A11.657,11.657,0,0,1,1104.169,272.038Zm-3.557-21.979a2.508,2.508,0,0,0-.653.07h0c-2.837.79-6.51,6.348-7.416,11.223-.426,2.294-.437,5.4,1.93,7.153,4.12,3.057,11.219,3.351,14,2.059,1.479-.689,3.745-3.049,5.773-6.013,2.1-3.071,2.954-5.334,2.689-5.9C1114.759,253.986,1104.043,250.059,1100.611,250.059Zm-.755-.3h0Z" transform="translate(-1091.56 -249.295)" fill="#2c2826"/></g><g id="Group_1316" data-name="Group 1316" transform="translate(4.313 4.212)"><path id="Path_5302" data-name="Path 5302" d="M1108.445,248.17c-4.649,1.294-7.133,7.878-1.191,12.289,4.163,3.09,11.467,3.459,14.388,2.1,3.444-1.6,5.295-7.076-.119-11.05C1116.876,248.095,1111.036,247.45,1108.445,248.17Z" transform="translate(-1103.376 -247.522)" fill="#fff"/><path id="Path_5303" data-name="Path 5303" d="M1116.563,263.068c-3.337,0-7.391-.862-10.154-2.913s-4.056-4.837-3.536-7.638a6.852,6.852,0,0,1,4.853-5.331h0a13.652,13.652,0,0,1,5.951.113,19.523,19.523,0,0,1,7.46,3.285c2.528,1.856,3.785,4.246,3.539,6.729a6.249,6.249,0,0,1-3.487,4.981A11.654,11.654,0,0,1,1116.563,263.068Zm-8.631-15.14h0a6.074,6.074,0,0,0-4.3,4.729c-.465,2.5.716,5.008,3.238,6.879,4.119,3.057,11.219,3.352,14,2.059a5.464,5.464,0,0,0,3.045-4.358c.218-2.2-.928-4.344-3.228-6.033C1116.082,247.828,1110.353,247.253,1107.932,247.928Z" transform="translate(-1102.759 -246.908)" fill="#2c2826"/></g><g id="Group_1317" data-name="Group 1317" transform="translate(10.551 0.497)"><path id="Path_5304" data-name="Path 5304" d="M1125.719,238.29c-2.489.693-7.983,10.364-4.8,12.725a6.688,6.688,0,0,0,6.448,1.062c1.843-.859,8.128-8.157,7.682-9.115C1133.744,240.164,1127.105,237.9,1125.719,238.29Z" transform="translate(-1119.568 -237.868)" fill="#fff"/><path id="Path_5305" data-name="Path 5305" d="M1124.639,252.275a7.7,7.7,0,0,1-4.564-1.556c-1-.74-1.338-2.141-.983-4.051.676-3.647,3.936-8.8,5.911-9.354h0c1.537-.428,8.387,1.887,9.781,4.881.287.616-.735,2.3-3.039,5.007-1.663,1.954-3.8,4.14-4.83,4.62A5.471,5.471,0,0,1,1124.639,252.275Zm.91-14.255a1.307,1.307,0,0,0-.34.037h0c-1.555.433-4.7,5.2-5.36,8.752-.207,1.116-.257,2.593.685,3.292a6.269,6.269,0,0,0,6.056,1.022c1.844-.859,7.469-7.617,7.483-8.63C1132.906,240.063,1127.335,238.02,1125.549,238.02Zm8.523,4.456Zm-8.966-4.791h0Z" transform="translate(-1118.956 -237.263)" fill="#2c2826"/></g><g id="Group_1318" data-name="Group 1318" transform="translate(14.391 0)"><path id="Path_5306" data-name="Path 5306" d="M1132.433,237.113c-2.489.693-3.819,4.218-.637,6.579,2.229,1.654,6.139,1.852,7.7,1.123,1.844-.859,2.835-3.788-.064-5.916A9.408,9.408,0,0,0,1132.433,237.113Z" transform="translate(-1129.54 -236.587)" fill="#fff"/><path id="Path_5307" data-name="Path 5307" d="M1136.45,244.989a9.577,9.577,0,0,1-5.5-1.6,4.325,4.325,0,0,1-1.963-4.266,3.847,3.847,0,0,1,2.726-2.994h0a9.72,9.72,0,0,1,7.333,1.848,4.111,4.111,0,0,1,1.967,3.764,3.525,3.525,0,0,1-1.969,2.811A6.536,6.536,0,0,1,1136.45,244.989Zm-4.529-8.12h0a3.072,3.072,0,0,0-2.175,2.393,3.586,3.586,0,0,0,1.664,3.506c2.12,1.574,5.9,1.742,7.311,1.084a2.744,2.744,0,0,0,1.528-2.189,3.451,3.451,0,0,0-1.656-3.068A9.025,9.025,0,0,0,1131.921,236.869Z" transform="translate(-1128.924 -235.972)" fill="#2c2826"/></g><g id="Group_1319" data-name="Group 1319" transform="translate(16.378 1.448)"><path id="Path_5308" data-name="Path 5308" d="M1136.715,240.821c-1.617.45-2.481,2.74-.414,4.273a6.027,6.027,0,0,0,5,.73c1.2-.558,1.841-2.461-.041-3.843A6.112,6.112,0,0,0,1136.715,240.821Z" transform="translate(-1134.7 -240.345)" fill="#fff"/><path id="Path_5309" data-name="Path 5309" d="M1139.142,245.861a6.521,6.521,0,0,1-3.686-1.071,2.939,2.939,0,0,1-1.328-2.9,2.636,2.636,0,0,1,1.867-2.05h0a6.46,6.46,0,0,1,4.879,1.222,2.8,2.8,0,0,1,1.332,2.567,2.428,2.428,0,0,1-1.357,1.935A4.212,4.212,0,0,1,1139.142,245.861Zm-2.94-5.282h0a1.859,1.859,0,0,0-1.316,1.448,2.133,2.133,0,0,0,1.029,2.145,5.658,5.658,0,0,0,4.611.69,1.647,1.647,0,0,0,.915-1.313,2.116,2.116,0,0,0-1.022-1.871A5.7,5.7,0,0,0,1136.2,240.579Z" transform="translate(-1134.084 -239.732)" fill="#2c2826"/></g></g></g></svg>
        <label for="checkbox-1">Es war schwer</label>
      </div>
    </button>
		
		<div class="robo-wiki-feedback-form__wrapper" data-form="It was hard">

    <div class="robo-wiki-feedback-form__header">
      <div>
        <span class="robo-wiki-feedback-form__check">
        </span>
        <h3>Es war schwer</h3>
      </div>

			
      <span tabindex="0" class="robo-wiki-feedback-form__close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </span>
    </div>

    <form class="robo-wiki-feedback-form__form">

			<h-captcha id="signupCaptcha"
				site-key=""
				size="invisible"
				tabindex="0"
        jsapi="https://js.hcaptcha.com/1/api.js?onload=onLoad" 
      >
      </h-captcha>

      <div>
        <input type="email" placeholder="Your email" data-gsp-name="Email (optional)" required />

        <textarea placeholder="Your comment" data-gsp-name="Feedback (optional)"></textarea>

        <input
          type="hidden"
          placeholder="location"
					data-gsp-name="Location"
					value="https://wiki.robonomics.network/de/docs/docs.11tydata.js"
        />

        <input
          type="hidden"
          placeholder="reaction"
					data-gsp-name="Reaction"
					value="It was hard"
        />

        <button class="robo-wiki-feedback-form__btn">
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--init">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span>Erzählen Sie uns mehr</span>
          </div>
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--wait hide">
						  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="194px" height="194px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="loader">
    <g transform="rotate(0 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-1.0784313725490198s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.9803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.8823529411764707s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.7843137254901962s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.6862745098039216s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.5882352941176471s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.4901960784313726s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.3921568627450981s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.29411764705882354s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.19607843137254904s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.09803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
  </svg>
            <span>Ihre Informationen werden gesendet...</span>
          </div>
        </button>
      </div>
    </form>

		
    <div class="robo-wiki-feedback-form__success hide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      <div>Danke,<br/> Wir bleiben in Kontakt! </div>
    </div>

  </div>
  </div>
		
			
			
			
			
	<div tabindex="0"  class="robo-wiki-feedback__wrapper">
    <button class="robo-wiki-feedback__item" data-text="It was ok">
      <div class="robo-wiki-feedback__checkbox">
        <input id="checkbox-2" type="checkbox" name="checkbox" class="custom-checkbox__field" >
        <span class="custom-checkbox__content"></span>
      </div>
      <div class="robo-wiki-feedback__content">
				<svg xmlns="http://www.w3.org/2000/svg" width="129.122" height="124.359" viewBox="0 0 129.122 124.359" aria-hidden="true"   ><g id="Group_1352" data-name="Group 1352" transform="translate(-1507.38 -207.827)"><g id="Group_1348" data-name="Group 1348" transform="translate(1507.38 207.827)"><g id="Group_1325" data-name="Group 1325"><path id="Path_5310" data-name="Path 5310" d="M1553.273,309.215c-.07.739-13.752,10.421-18.7,11.448,0,0,3.307-15.8,1.474-12.468-4.458,8.114-21.416,5.928-21.416,5.928s12.783-10.094,8.394-16.421c0,0-10.938,6.925-15.039,6.912s14.125-9.537,7.4-21.359-3.031-40.273,13.344-51.787,6.854-23.642,6.854-23.642,9.923,13.38,9.079,14.42,10.413-7.6,10.056-11.735,3.406,7.407,3.406,7.407,30.5-6.153,43.091,13.751,18.769,23.1,22.442,23.406-17.333,3.257-20.89-1.4,8.2,24.138,17.043,27.721-18.857,2.31-19.832,1.925S1553.273,309.215,1553.273,309.215Z" transform="translate(-1507.38 -207.827)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1326" data-name="Group 1326" transform="translate(48 90.9)"><path id="Path_5311" data-name="Path 5311" d="M1627.614,432.486c.846,3.137-1.275,28.783-1.275,28.783s7.79,3.891,13.668,2.385c4.731-1.213,6.184-3.339,6.184-3.339a85.121,85.121,0,0,1,1.385-19.432C1649.58,429.975,1627.614,432.486,1627.614,432.486Z" transform="translate(-1625.932 -431.82)" fill="#fff" fill-rule="evenodd"/><path id="Path_5312" data-name="Path 5312" d="M1636.421,463.8c-5.226,0-10.588-2.643-10.857-2.777a.407.407,0,0,1-.224-.4c.732-8.846,1.942-26.217,1.288-28.643a.408.408,0,0,1,.347-.51c.581-.067,14.3-1.571,18.989,3.451a5.959,5.959,0,0,1,1.419,5.423,85.587,85.587,0,0,0-1.38,19.329.406.406,0,0,1-.07.259c-.063.092-1.595,2.267-6.419,3.5A12.486,12.486,0,0,1,1636.421,463.8Zm-10.247-3.388c1.36.631,8.051,3.541,13.139,2.237,3.91-1,5.51-2.651,5.869-3.074a87.465,87.465,0,0,1,1.4-19.376,5.12,5.12,0,0,0-1.213-4.72c-3.968-4.247-15.484-3.455-17.869-3.241C1628.084,436.624,1626.4,457.591,1626.174,460.416Z" transform="translate(-1625.339 -431.213)" fill="#2c2826"/></g><g id="Group_1327" data-name="Group 1327" transform="translate(22.048 38.099)"><path id="Path_5313" data-name="Path 5313" d="M1572.169,353.221s2.164,10.228,11.059,15.284,17.111,7.51,30.323,4.556,22.642-17.192,24.879-34.409-1.144-23.168-1.144-23.168-23.554-12.78-25.034-13.027-37.3,3.843-37.668,3.808-12.022,16.772-12.022,16.772l.841,11.424s-.292,14.761,4.649,17.439S1572.169,353.221,1572.169,353.221Z" transform="translate(-1562.155 -302.043)" fill="#fff"/><path id="Path_5314" data-name="Path 5314" d="M1602.353,374.162c-7.68,0-13.628-2.317-19.918-5.892-7.626-4.334-10.412-12.5-11.083-14.883-.553-.013-1.649-.4-4.085-1.716-5.1-2.765-4.875-17.192-4.863-17.8l-.839-11.386a.41.41,0,0,1,.071-.262c.03-.042,2.948-4.251,5.874-8.4,6.051-8.584,6.175-8.574,6.519-8.544.214-.009,3.635-.382,7.966-.856,14.493-1.583,28.726-3.115,29.731-2.949,1.5.251,22.744,11.76,25.161,13.071a.406.406,0,0,1,.16.157,16.866,16.866,0,0,1,1.459,5.266c.521,3.347.9,9.213-.265,18.155-2.366,18.219-12.255,31.861-25.193,34.753A48.9,48.9,0,0,1,1602.353,374.162ZM1572.034,352.8c.4,1.579,2.938,10.3,10.8,14.767,8.752,4.975,16.828,7.465,30.033,4.513,12.6-2.818,22.242-16.189,24.564-34.064,2.043-15.73-.642-21.987-1.046-22.817-9.436-5.119-23.746-12.742-24.8-12.923-1.047-.156-19.561,1.867-29.509,2.955-5.675.62-7.418.808-7.937.849-.906.961-7.43,10.244-11.76,16.489l.83,11.281c0,.183-.229,14.581,4.438,17.111a15.6,15.6,0,0,0,3.525,1.594.407.407,0,0,1,.746-.127A.755.755,0,0,1,1572.034,352.8Zm1.919-46.713a.5.5,0,0,0,.082,0C1573.993,306.084,1573.967,306.084,1573.953,306.083Z" transform="translate(-1561.563 -301.455)" fill="#2c2826"/></g><g id="Group_1328" data-name="Group 1328" transform="translate(8.853 29.356)"><path id="Path_5315" data-name="Path 5315" d="M1570.251,280.386c29.332-.024,41.354-3.225,48,8.518s8.057,23.731,17.511,26.712a64.442,64.442,0,0,1-37.42-10.7s5.306,12.828,4.5,14.769c0,0-18.34-15.275-26.518-16.84s-10.591-4.344-10.591-4.344,1.227,14.024-3.182,21.918-2.993,20.477-1.3,24.3c0,0-7.781-4-8.723-11.068s-10.583-7.9-12.647-9.622-11.638-14.936-10.69-17.084" transform="translate(-1529.135 -279.97)" fill="#2c2826"/></g><g id="Group_1329" data-name="Group 1329" transform="translate(54.414 66.894)"><ellipse id="Ellipse_160" data-name="Ellipse 160" cx="3.201" cy="1.787" rx="3.201" ry="1.787" transform="matrix(0.003, -1, 1, 0.003, 0, 6.403)" fill="#2c2826"/></g><g id="Group_1330" data-name="Group 1330" transform="translate(86.098 68.02)"><ellipse id="Ellipse_161" data-name="Ellipse 161" cx="3.201" cy="1.787" rx="3.201" ry="1.787" transform="matrix(0.003, -1, 1, 0.003, 0, 6.403)" fill="#2c2826"/></g><g id="Group_1331" data-name="Group 1331" transform="translate(72.044 69.81)"><path id="Path_5316" data-name="Path 5316" d="M1685.426,380.581s2.237-.807,2.921.92-2.574,2.778-2.574,2.778" transform="translate(-1685.02 -379.983)" fill="#fff" fill-rule="evenodd"/><path id="Path_5317" data-name="Path 5317" d="M1685.18,384.087a.407.407,0,0,1-.125-.794,4.439,4.439,0,0,0,2.3-1.556.813.813,0,0,0,.02-.685c-.529-1.335-2.329-.713-2.405-.686a.407.407,0,0,1-.275-.766c.9-.325,2.781-.5,3.437,1.153a1.615,1.615,0,0,1-.041,1.332c-.586,1.242-2.563,1.91-2.787,1.983A.416.416,0,0,1,1685.18,384.087Z" transform="translate(-1684.427 -379.385)" fill="#2c2826"/></g><g id="Group_1332" data-name="Group 1332" transform="translate(51.359 53.769)"><path id="Path_5318" data-name="Path 5318" d="M1641.845,343.562a2.331,2.331,0,0,0,1.395.141,2.61,2.61,0,0,0,1.472-1.434c.013-.258-.418.078-1.572-.719-1.134-.784-5.46-2.967-9.2-.3-.645.461-.311.969.416.864A9.035,9.035,0,0,1,1641.845,343.562Z" transform="translate(-1633.593 -339.964)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1333" data-name="Group 1333" transform="translate(83.941 63.089)"><path id="Path_5319" data-name="Path 5319" d="M1716.464,366.281a2.328,2.328,0,0,1-1.4.072,2.611,2.611,0,0,1-1.4-1.5c0-.259.413.1,1.605-.641,1.171-.727,5.6-2.694,9.207.154.621.492.263.984-.458.842A9.037,9.037,0,0,0,1716.464,366.281Z" transform="translate(-1713.665 -362.868)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1334" data-name="Group 1334" transform="translate(67.864 88.945)"><path id="Path_5320" data-name="Path 5320" d="M1681.927,427.408a5.377,5.377,0,0,1-6.772.161" transform="translate(-1674.748 -427.001)" fill="#fff" fill-rule="evenodd"/><path id="Path_5321" data-name="Path 5321" d="M1677.85,428.5a6,6,0,0,1-3.552-1.215.407.407,0,0,1,.526-.621,4.944,4.944,0,0,0,6.261-.174.407.407,0,1,1,.494.647A6.056,6.056,0,0,1,1677.85,428.5Z" transform="translate(-1674.154 -426.408)" fill="#2c2826"/></g><g id="Group_1335" data-name="Group 1335" transform="translate(7.149 20.512)"><path id="Path_5322" data-name="Path 5322" d="M1538.306,296.177c6.922-11.518,16.111-22.044,47.97-24.662s33.9,11.545,33.9,11.545.489-17.443-19.694-22.108-47.625-.342-61.635,21.228-12.868,30.081-12.868,30.081l1.734,5.895S1535.1,301.514,1538.306,296.177Z" transform="translate(-1525.549 -258.843)" fill="#fff"/><path id="Path_5323" data-name="Path 5323" d="M1527.117,317.955h-.026a.407.407,0,0,1-.364-.291l-1.734-5.894a.4.4,0,0,1-.013-.061c-.047-.354-1-8.907,12.931-30.357,6.465-9.954,16.4-17.084,28.732-20.621a67.646,67.646,0,0,1,33.336-.781c20.272,4.686,20.013,22.339,20.008,22.516a.407.407,0,0,1-.809.047c-.005-.033-.565-3.458-4.909-6.532-7.338-5.192-19.579-5.4-28.557-4.666-14.478,1.189-25.323,4.112-33.157,8.934-7.2,4.434-11.225,10.086-14.5,15.531h0c-3.158,5.255-10.494,21.768-10.568,21.934A.406.406,0,0,1,1527.117,317.955Zm-1.333-6.38,1.412,4.8c1.655-3.692,7.438-16.479,10.163-21.013h0c6.683-11.12,15.916-22.2,48.286-24.858,13.31-1.094,23.125.543,29.169,4.866a14.255,14.255,0,0,1,4.129,4.389,22.973,22.973,0,0,0-2.022-6.464c-2.155-4.418-6.875-10.182-17.125-12.551-28.546-6.6-51.307,5.819-61.2,21.053C1525.253,302.332,1525.737,311.035,1525.784,311.575Z" transform="translate(-1524.95 -258.236)" fill="#2c2826"/></g><g id="Group_1341" data-name="Group 1341" transform="translate(40.814 0.372)"><g id="Group_1336" data-name="Group 1336" transform="translate(0 8.071)"><path id="Path_5324" data-name="Path 5324" d="M1616.34,229.845c-5.589,2.414-11.932,20.289-3.748,24.783,5.733,3.148,14.927,2.359,18.345.157,4.029-2.6,10.028-14.923,8.679-17.017C1635.677,231.651,1619.454,228.5,1616.34,229.845Z" transform="translate(-1608.274 -229.146)" fill="#fff"/><path id="Path_5325" data-name="Path 5325" d="M1621.391,256.547a20.383,20.383,0,0,1-9.589-2.133c-2.022-1.11-4.375-3.649-4.1-9.435.315-6.65,4.146-14.464,7.884-16.079h0c3.271-1.412,19.783,1.87,23.78,8.076,1.571,2.439-4.68,14.925-8.8,17.58C1628.73,255.737,1625.193,256.547,1621.391,256.547Zm-5.484-26.9c-3.434,1.483-7.1,9.1-7.393,15.37-.14,2.962.385,6.874,3.68,8.683,5.7,3.128,14.664,2.275,17.929.172,3.87-2.493,9.735-14.626,8.557-16.455-3.8-5.9-19.88-9.016-22.773-7.769Z" transform="translate(-1607.679 -228.576)" fill="#2c2826"/></g><g id="Group_1337" data-name="Group 1337" transform="translate(4.024 6.358)"><path id="Path_5326" data-name="Path 5326" d="M1623.436,226.265c-5.589,2.414-7.566,11.071.619,15.565,5.733,3.148,14.927,2.359,18.345.157,4.029-2.6,5.406-9.753-2.042-13.793C1633.962,224.726,1626.55,224.921,1623.436,226.265Z" transform="translate(-1618.161 -224.958)" fill="#fff"/><path id="Path_5327" data-name="Path 5327" d="M1632.855,243.728a20.39,20.39,0,0,1-9.589-2.133c-3.784-2.077-5.856-5.31-5.688-8.869a8.564,8.564,0,0,1,5.1-7.427h0a17.1,17.1,0,0,1,7.42-.872,24.543,24.543,0,0,1,9.856,2.818c3.453,1.873,5.419,4.621,5.536,7.739a7.8,7.8,0,0,1-3.468,6.754C1640.194,242.917,1636.657,243.728,1632.855,243.728ZM1623,226.046h0a7.745,7.745,0,0,0-4.615,6.718c-.153,3.236,1.767,6.195,5.267,8.116,5.7,3.128,14.663,2.275,17.929.172a6.973,6.973,0,0,0,3.094-6.039c-.106-2.819-1.921-5.324-5.11-7.054C1633.222,224.516,1625.932,224.783,1623,226.046Z" transform="translate(-1617.568 -224.365)" fill="#2c2826"/></g><g id="Group_1338" data-name="Group 1338" transform="translate(11.861 0.921)"><path id="Path_5328" data-name="Path 5328" d="M1643.332,212.15c-2.993,1.292-8.2,14.323-3.821,16.729,3.07,1.686,6.412,1.4,8.242.223,2.158-1.39,8.763-11.589,8.04-12.71C1653.684,213.117,1645,211.43,1643.332,212.15Z" transform="translate(-1637.42 -211.586)" fill="#fff"/><path id="Path_5329" data-name="Path 5329" d="M1643.438,229.888a9.8,9.8,0,0,1-4.716-1.235c-1.346-.739-2-2.407-1.882-4.823.22-4.652,3.384-11.619,5.738-12.636h0c1.83-.791,10.725.918,12.964,4.394.556.863-1.292,4.117-2.939,6.694-1.739,2.72-4.028,5.809-5.222,6.579A7.427,7.427,0,0,1,1643.438,229.888Zm.535-18.09a2.956,2.956,0,0,0-1.072.143h0c-2.217.957-5.063,8.033-5.248,11.927-.068,1.453.129,3.34,1.462,4.071a7.988,7.988,0,0,0,7.826.237c.9-.581,2.9-3.108,4.855-6.144,2.4-3.723,3.144-5.676,3.049-6.032C1653.153,213.38,1646.756,211.8,1643.973,211.8Zm-1.234-.231h0Z" transform="translate(-1636.828 -211.004)" fill="#2c2826"/></g><g id="Group_1339" data-name="Group 1339" transform="translate(15.419)"><path id="Path_5330" data-name="Path 5330" d="M1649.179,210.234c-2.992,1.292-4.051,5.927.331,8.333,3.07,1.686,7.991,1.263,9.821.084,2.158-1.39,2.894-5.222-1.093-7.384C1654.814,209.409,1650.846,209.513,1649.179,210.234Z" transform="translate(-1646.165 -209.34)" fill="#fff"/><path id="Path_5331" data-name="Path 5331" d="M1653.939,219.485a11.092,11.092,0,0,1-5.219-1.16,5.382,5.382,0,0,1-3.143-4.923,4.775,4.775,0,0,1,2.847-4.14c1.729-.747,5.793-.915,9.414,1.049a5.2,5.2,0,0,1,3.063,4.3,4.37,4.37,0,0,1-1.943,3.782A10.214,10.214,0,0,1,1653.939,219.485Zm-2.379-9.927a7.546,7.546,0,0,0-2.814.45h0a3.957,3.957,0,0,0-2.356,3.432,4.6,4.6,0,0,0,2.722,4.171c2.944,1.618,7.735,1.174,9.406.1a3.542,3.542,0,0,0,1.57-3.067,4.43,4.43,0,0,0-2.637-3.617A12.577,12.577,0,0,0,1651.561,209.557Zm-2.975.077h0Z" transform="translate(-1645.572 -208.741)" fill="#2c2826"/></g><g id="Group_1340" data-name="Group 1340" transform="translate(17.959 1.729)"><path id="Path_5332" data-name="Path 5332" d="M1654.505,214.306c-1.944.839-2.631,3.85.215,5.412a7.6,7.6,0,0,0,6.379.055c1.4-.9,1.88-3.391-.71-4.8A7.711,7.711,0,0,0,1654.505,214.306Z" transform="translate(-1652.405 -213.585)" fill="#fff"/><path id="Path_5333" data-name="Path 5333" d="M1657.438,220.262a7.5,7.5,0,0,1-3.507-.781,3.631,3.631,0,0,1-2.115-3.329,3.245,3.245,0,0,1,1.935-2.814h0a8.06,8.06,0,0,1,6.239.686,3.455,3.455,0,0,1,2.064,2.915,2.981,2.981,0,0,1-1.327,2.581A6.5,6.5,0,0,1,1657.438,220.262Zm-3.365-6.177h0a2.427,2.427,0,0,0-1.445,2.105,2.766,2.766,0,0,0,1.694,2.577,7.23,7.23,0,0,0,5.963.069,2.152,2.152,0,0,0,.955-1.866,2.742,2.742,0,0,0-1.639-2.23A7.29,7.29,0,0,0,1654.073,214.085Z" transform="translate(-1651.812 -212.991)" fill="#2c2826"/></g></g><g id="Group_1347" data-name="Group 1347" transform="translate(73.716 3.463)"><g id="Group_1342" data-name="Group 1342" transform="translate(0 6.741)"><path id="Path_5334" data-name="Path 5334" d="M1695.949,234.169c-4.68,2.022-9.992,16.989-3.139,20.753,4.8,2.636,12.5,1.975,15.362.131,3.374-2.173,8.4-12.5,7.268-14.25C1712.141,235.682,1698.557,233.043,1695.949,234.169Z" transform="translate(-1689.129 -233.502)" fill="#fff"/><path id="Path_5335" data-name="Path 5335" d="M1700.082,256.474a17.134,17.134,0,0,1-8.059-1.792c-2.417-1.327-3.649-4.155-3.469-7.962.265-5.59,3.492-12.161,6.641-13.521h0c2.822-1.22,16.538,1.422,19.994,6.788.921,1.429-1.239,6-1.923,7.37-1.4,2.8-3.57,6.22-5.467,7.442C1706.258,255.791,1703.281,256.474,1700.082,256.474Zm-4.564-22.529c-2.857,1.234-5.9,7.58-6.151,12.813-.117,2.462.318,5.711,3.047,7.21,4.751,2.609,12.225,1.9,14.945.146,1.449-.933,3.482-3.729,5.179-7.122,1.759-3.516,2.326-6.007,1.967-6.564-3.167-4.918-16.575-7.525-18.987-6.481Z" transform="translate(-1688.537 -232.904)" fill="#2c2826"/></g><g id="Group_1343" data-name="Group 1343" transform="translate(3.368 5.323)"><path id="Path_5336" data-name="Path 5336" d="M1701.892,231.172c-4.681,2.021-6.336,9.27.518,13.034,4.8,2.636,12.5,1.975,15.362.131,3.374-2.173,4.526-8.167-1.71-11.55C1710.706,229.882,1704.5,230.046,1701.892,231.172Z" transform="translate(-1697.408 -230.011)" fill="#fff"/><path id="Path_5337" data-name="Path 5337" d="M1709.68,245.763a17.143,17.143,0,0,1-8.06-1.792c-3.191-1.753-4.94-4.482-4.8-7.488a7.238,7.238,0,0,1,4.315-6.276h0a14.4,14.4,0,0,1,6.244-.737,20.621,20.621,0,0,1,8.281,2.367c2.913,1.58,4.571,3.9,4.67,6.536a6.6,6.6,0,0,1-2.934,5.714C1715.855,245.081,1712.879,245.763,1709.68,245.763Zm-3.729-15.529a12.044,12.044,0,0,0-4.491.719h0a6.42,6.42,0,0,0-3.824,5.568c-.127,2.684,1.468,5.139,4.376,6.736,4.752,2.61,12.226,1.9,14.945.146a5.772,5.772,0,0,0,2.562-5c-.088-2.336-1.6-4.414-4.245-5.851A19.916,19.916,0,0,0,1705.951,230.234Zm-4.653.346h0Z" transform="translate(-1696.814 -229.42)" fill="#2c2826"/></g><g id="Group_1344" data-name="Group 1344" transform="translate(9.931 0.774)"><path id="Path_5338" data-name="Path 5338" d="M1718.552,219.352c-2.506,1.082-6.869,11.994-3.2,14.009a7.066,7.066,0,0,0,6.9.186c1.807-1.164,7.338-9.7,6.733-10.643C1727.221,220.162,1719.948,218.749,1718.552,219.352Z" transform="translate(-1713.535 -218.818)" fill="#fff"/><path id="Path_5339" data-name="Path 5339" d="M1718.544,234.181a8.271,8.271,0,0,1-3.98-1.042c-1.151-.632-1.708-2.05-1.611-4.1.185-3.914,2.856-9.781,4.845-10.639,1.545-.667,9.049.772,10.938,3.7.389.6-.439,2.514-2.461,5.677-1.46,2.284-3.385,4.879-4.393,5.529A6.28,6.28,0,0,1,1718.544,234.181Zm.464-15.152a2.451,2.451,0,0,0-.888.118h0c-1.566.676-4.174,6.12-4.354,9.93-.057,1.2.1,2.752,1.189,3.348a6.624,6.624,0,0,0,6.485.2c1.807-1.164,6.724-9.045,6.594-10.108C1726.592,220.337,1721.308,219.029,1719.009,219.029Zm9.023,3.472Zm-10.073-3.727h0Z" transform="translate(-1712.942 -218.24)" fill="#2c2826"/></g><g id="Group_1345" data-name="Group 1345" transform="translate(12.911)"><path id="Path_5340" data-name="Path 5340" d="M1723.448,217.747c-2.506,1.082-3.392,4.963.277,6.978,2.57,1.412,6.692,1.058,8.224.07,1.807-1.163,2.424-4.372-.915-6.183A9.941,9.941,0,0,0,1723.448,217.747Z" transform="translate(-1720.858 -216.934)" fill="#fff"/><path id="Path_5341" data-name="Path 5341" d="M1727.327,225.481a9.28,9.28,0,0,1-4.391-1,4.569,4.569,0,0,1-2.667-4.183,4.066,4.066,0,0,1,2.424-3.525h0a10.266,10.266,0,0,1,7.942.881,4.343,4.343,0,0,1,2.6,3.658,3.727,3.727,0,0,1-1.657,3.225A8.61,8.61,0,0,1,1727.327,225.481Zm-4.312-7.957a3.247,3.247,0,0,0-1.934,2.817,3.789,3.789,0,0,0,2.246,3.431c2.445,1.343,6.422.977,7.808.085a2.9,2.9,0,0,0,1.285-2.51,3.647,3.647,0,0,0-2.174-2.973,9.531,9.531,0,0,0-7.231-.849Z" transform="translate(-1720.265 -216.337)" fill="#2c2826"/></g><g id="Group_1346" data-name="Group 1346" transform="translate(15.037 1.448)"><path id="Path_5342" data-name="Path 5342" d="M1727.908,221.158c-1.628.7-2.2,3.224.18,4.533a6.368,6.368,0,0,0,5.342.046c1.174-.756,1.574-2.84-.594-4.016A6.458,6.458,0,0,0,1727.908,221.158Z" transform="translate(-1726.083 -220.489)" fill="#fff"/><path id="Path_5343" data-name="Path 5343" d="M1730.266,226.115a6.341,6.341,0,0,1-2.967-.661,3.1,3.1,0,0,1-1.806-2.849,2.785,2.785,0,0,1,1.66-2.414h0a6.823,6.823,0,0,1,5.283.578,2.958,2.958,0,0,1,1.763,2.5,2.567,2.567,0,0,1-1.141,2.221A5.525,5.525,0,0,1,1730.266,226.115Zm-2.79-5.177h0a1.966,1.966,0,0,0-1.17,1.7,2.254,2.254,0,0,0,1.385,2.1,5.972,5.972,0,0,0,4.926.06,1.738,1.738,0,0,0,.769-1.506,2.234,2.234,0,0,0-1.338-1.811A6.03,6.03,0,0,0,1727.476,220.938Z" transform="translate(-1725.49 -219.896)" fill="#2c2826"/></g></g></g><g id="Group_1351" data-name="Group 1351" transform="translate(1609.265 264.865)"><g id="Group_1349" data-name="Group 1349" transform="translate(0 0)"><path id="Path_5344" data-name="Path 5344" d="M1771.732,366.655a1.83,1.83,0,0,0,.461-2.23c-1.275-2.924-1.182-6.131-1.848-9.184-.254-1.162-.36-2.356-.57-3.528a2.211,2.211,0,0,1,.876-2.524,1.111,1.111,0,0,1,1.734.713c.893,3.066,1.826,6.12,2.755,9.176.188.616.423,1.218.754,2.163.383-1.515.738-2.759,1.006-4.022.325-1.532.569-3.082.867-4.62a5.124,5.124,0,0,1,.321-.967,1.589,1.589,0,0,1,2.091-1.13c1.061.358.649,1.194.586,1.9-.379,4.31-.766,8.619-.978,12.962a15.241,15.241,0,0,0,2.485-6.258,5.139,5.139,0,0,1,.7-2.194,2.134,2.134,0,0,1,1.647-.584c.762.048.532.762.528,1.305a32.634,32.634,0,0,1-2.471,11.01,27.429,27.429,0,0,0-1.678,7.976c-.079,1.459-4.127,23.592-4.665,26.852-.62,3.757-1.11,7.536-1.7,11.3-.044.281-.467.717-.716.719-4.658.032-8.095.009-12.753-.005-.024,0-.049-.035-.142-.107.129-.283.268-.584.4-.887a108.59,108.59,0,0,0,7.371-23.332c.485-2.49.02-4.982-2.373-6.669a9.086,9.086,0,0,1-1.688-1.913c-.865-1.1-1.7-2.223-2.531-3.347a7.712,7.712,0,0,1-.71-1.117c-.838-1.665-1.625-3.355-2.488-5.006a1.647,1.647,0,0,1,.2-1.992,4.835,4.835,0,0,0,1.316-3.34c-.009-.783.562-1.169,1.407-1.133a1.8,1.8,0,0,0,1.032-.319q1.545-1.09,3.019-2.28a1.462,1.462,0,0,1,1.808-.069c.761.449,1.478.976,2.209,1.476C1770.579,365.847,1771.155,366.253,1771.732,366.655Zm-1.972,6.319c-1.061-2.972-.817-3.387-2.356-4.442-.285-.195-1.045.01-1.255.142a4.069,4.069,0,0,0-.78,1.078,8.642,8.642,0,0,0-1.2,2.739c.656,1.582,1.268,2.18,2.234,1.886A33.979,33.979,0,0,0,1769.76,372.974Z" transform="translate(-1758.355 -348.592)" fill="#fff"/><path id="Path_5345" data-name="Path 5345" d="M1768.567,415.318c-1.833,0-3.6-.006-5.507-.013l-2.491-.008a.478.478,0,0,1-.324-.138c-.016-.013-.036-.031-.065-.053a.407.407,0,0,1-.123-.492l.113-.246c.095-.208.193-.422.289-.638a108.662,108.662,0,0,0,7.343-23.245c.534-2.743-.209-4.849-2.208-6.258a6.8,6.8,0,0,1-1.438-1.553c-.111-.149-.222-.3-.336-.441-.892-1.134-1.767-2.315-2.539-3.356a8.052,8.052,0,0,1-.747-1.177c-.33-.658-.654-1.32-.977-1.981-.486-.995-.988-2.024-1.509-3.018a2.054,2.054,0,0,1,.255-2.446,4.4,4.4,0,0,0,1.218-3.069,1.462,1.462,0,0,1,.422-1.1,1.834,1.834,0,0,1,1.408-.447,1.467,1.467,0,0,0,.78-.244c.99-.7,2-1.461,3-2.264a1.861,1.861,0,0,1,2.27-.1c.578.341,1.132.727,1.669,1.1.187.13.375.261.563.389.415.283.827.571,1.238.859l.2.14a1.353,1.353,0,0,0,.155-1.524,21.5,21.5,0,0,1-1.359-5.988c-.137-1.081-.28-2.2-.514-3.272-.153-.7-.254-1.414-.352-2.105-.068-.481-.136-.961-.221-1.438a2.6,2.6,0,0,1,1.088-2.956,1.512,1.512,0,0,1,2.313.959c.805,2.764,1.657,5.565,2.481,8.274l.273.9c.088.288.186.573.3.9.009-.034.017-.068.026-.1.238-.911.463-1.772.643-2.621.195-.914.363-1.854.526-2.762.111-.617.221-1.235.341-1.85a5.449,5.449,0,0,1,.344-1.046,2,2,0,0,1,2.6-1.36c1.19.4,1.02,1.366.918,1.943-.023.128-.046.256-.057.379l-.051.584c-.309,3.513-.627,7.13-.838,10.733a14.272,14.272,0,0,0,1.589-4.71,5.464,5.464,0,0,1,.774-2.371,2.5,2.5,0,0,1,2-.752.982.982,0,0,1,.712.315,1.46,1.46,0,0,1,.213,1.116c-.007.1-.016.192-.016.283a33.325,33.325,0,0,1-2.495,11.147,27.19,27.19,0,0,0-1.654,7.858c-.054,1-1.825,10.91-3.249,18.873-.667,3.727-1.242,6.945-1.42,8.023-.343,2.082-.652,4.206-.951,6.262-.24,1.65-.488,3.357-.753,5.033a1.419,1.419,0,0,1-1.115,1.062C1771.618,415.314,1770.069,415.318,1768.567,415.318Zm-7.554-.833,2.05.007c3.471.013,6.47.023,10.258,0a.965.965,0,0,0,.317-.378c.264-1.67.512-3.373.751-5.021.3-2.059.609-4.188.954-6.277.179-1.084.754-4.3,1.421-8.034,1.345-7.522,3.187-17.824,3.238-18.774a28.007,28.007,0,0,1,1.7-8.094,32.6,32.6,0,0,0,2.446-10.873c0-.109.01-.225.019-.341a1.281,1.281,0,0,0-.017-.519.268.268,0,0,0-.149-.036,1.79,1.79,0,0,0-1.29.415,4.8,4.8,0,0,0-.63,2.017,15.591,15.591,0,0,1-2.548,6.423.407.407,0,0,1-.746-.245c.2-4.155.572-8.343.928-12.394l.051-.584c.013-.146.039-.3.065-.448.114-.648.127-.861-.377-1.031-.707-.238-1.24.065-1.585.9a4.8,4.8,0,0,0-.3.889c-.118.612-.228,1.226-.338,1.839-.164.915-.334,1.86-.531,2.788-.184.867-.411,1.736-.652,2.657-.115.438-.234.895-.357,1.379a.406.406,0,0,1-.376.307.4.4,0,0,1-.4-.272c-.115-.328-.218-.614-.312-.873-.18-.5-.322-.894-.448-1.306l-.272-.9c-.825-2.711-1.677-5.515-2.484-8.283a.841.841,0,0,0-.422-.565.89.89,0,0,0-.732.1c-.6.316-.846,1.078-.664,2.092.087.487.157.977.226,1.468.1.676.194,1.375.341,2.045.242,1.107.387,2.244.526,3.343a20.859,20.859,0,0,0,1.3,5.766,2.23,2.23,0,0,1-.542,2.675.406.406,0,0,1-.525.051l-.5-.35c-.409-.286-.818-.573-1.23-.854-.19-.13-.38-.262-.57-.394-.524-.365-1.066-.742-1.617-1.067a1.061,1.061,0,0,0-1.346.036c-1.012.814-2.035,1.586-3.039,2.3a2.2,2.2,0,0,1-1.284.393,1.1,1.1,0,0,0-.807.218.662.662,0,0,0-.175.5,5.227,5.227,0,0,1-1.414,3.609,1.25,1.25,0,0,0-.152,1.539c.526,1,1.031,2.039,1.519,3.039.322.659.643,1.318.973,1.973a7.246,7.246,0,0,0,.674,1.057c.768,1.037,1.639,2.213,2.524,3.338.117.149.232.3.347.456a6.2,6.2,0,0,0,1.255,1.376c2.252,1.589,3.13,4.036,2.537,7.08a109.425,109.425,0,0,1-7.4,23.419C1761.14,414.2,1761.076,414.345,1761.012,414.485Zm-.442,0h0Zm4.778-40.219c-1.068,0-1.666-1.046-2.149-2.212a.4.4,0,0,1-.008-.29c.087-.251.155-.465.217-.66a7.012,7.012,0,0,1,1.031-2.17c.047-.071.1-.16.157-.257a2.733,2.733,0,0,1,.745-.94,1.982,1.982,0,0,1,1.7-.133c1.289.883,1.466,1.44,1.938,2.926.144.452.322,1.015.571,1.714a.406.406,0,0,1-.222.511c-.331.142-.661.293-.991.444a19.54,19.54,0,0,1-2.41.975A1.963,1.963,0,0,1,1765.349,374.265Zm-1.338-2.383c.709,1.649,1.2,1.657,1.679,1.511a19,19,0,0,0,2.309-.937c.22-.1.439-.2.66-.3-.19-.549-.335-1-.455-1.383-.467-1.471-.564-1.777-1.622-2.5a1.611,1.611,0,0,0-.809.151,2.628,2.628,0,0,0-.476.662c-.066.112-.127.215-.181.3a6.282,6.282,0,0,0-.932,1.963C1764.133,371.51,1764.078,371.685,1764.011,371.882Z" transform="translate(-1757.763 -347.998)" fill="#2c2826"/></g><g id="Group_1350" data-name="Group 1350" transform="translate(3.199 17.092)"><path id="Path_5346" data-name="Path 5346" d="M1768,391s-2.442,2.035-.814,3.662c.814.814,2.493.469,3.255-.814" transform="translate(-1766.218 -390.593)" fill="#fff"/><path id="Path_5347" data-name="Path 5347" d="M1767.74,394.915a2,2,0,0,1-1.436-.558,2.126,2.126,0,0,1-.676-1.645,4.332,4.332,0,0,1,1.517-2.618.407.407,0,0,1,.522.625,3.57,3.57,0,0,0-1.226,2.032,1.329,1.329,0,0,0,.439,1.03,1.269,1.269,0,0,0,1.071.306,2.168,2.168,0,0,0,1.547-1.04.407.407,0,0,1,.7.416,2.954,2.954,0,0,1-2.145,1.432A2.468,2.468,0,0,1,1767.74,394.915Z" transform="translate(-1765.625 -390.001)"/></g></g></g></svg>
        <label for="checkbox-2">Es war in Ordnung</label>
      </div>
    </button>
		
		<div class="robo-wiki-feedback-form__wrapper" data-form="It was ok">

    <div class="robo-wiki-feedback-form__header">
      <div>
        <span class="robo-wiki-feedback-form__check">
        </span>
        <h3>Es war in Ordnung</h3>
      </div>

			
      <span tabindex="0" class="robo-wiki-feedback-form__close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </span>
    </div>

    <form class="robo-wiki-feedback-form__form">

			<h-captcha id="signupCaptcha"
				site-key=""
				size="invisible"
				tabindex="0"
        jsapi="https://js.hcaptcha.com/1/api.js?onload=onLoad" 
      >
      </h-captcha>

      <div>
        <input type="email" placeholder="Your email" data-gsp-name="Email (optional)" required />

        <textarea placeholder="Your comment" data-gsp-name="Feedback (optional)"></textarea>

        <input
          type="hidden"
          placeholder="location"
					data-gsp-name="Location"
					value="https://wiki.robonomics.network/de/docs/docs.11tydata.js"
        />

        <input
          type="hidden"
          placeholder="reaction"
					data-gsp-name="Reaction"
					value="It was ok"
        />

        <button class="robo-wiki-feedback-form__btn">
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--init">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span>Erzählen Sie uns mehr</span>
          </div>
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--wait hide">
						  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="194px" height="194px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="loader">
    <g transform="rotate(0 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-1.0784313725490198s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.9803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.8823529411764707s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.7843137254901962s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.6862745098039216s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.5882352941176471s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.4901960784313726s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.3921568627450981s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.29411764705882354s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.19607843137254904s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.09803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
  </svg>
            <span>Ihre Informationen werden gesendet...</span>
          </div>
        </button>
      </div>
    </form>

		
    <div class="robo-wiki-feedback-form__success hide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      <div>Danke,<br/> Wir bleiben in Kontakt! </div>
    </div>

  </div>
  </div>
		
			
			
			
			
	<div tabindex="0"  class="robo-wiki-feedback__wrapper">
    <button class="robo-wiki-feedback__item" data-text="It was easy">
      <div class="robo-wiki-feedback__checkbox">
        <input id="checkbox-3" type="checkbox" name="checkbox" class="custom-checkbox__field" >
        <span class="custom-checkbox__content"></span>
      </div>
      <div class="robo-wiki-feedback__content">
				<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="144.394" height="124.359" viewBox="0 0 144.394 124.359" aria-hidden="true"   ><defs><clipPath id="clip-path"><path id="Intersection_1" data-name="Intersection 1" d="M12.1,13.686C6.04,13.5-.024,6.08,0,2.935.017.875,3.6-.076,9.744.583A28.1,28.1,0,0,0,18.063.4c2.311-.411,3.163-.822,4.112.521,2.047,2.9-2.781,12.77-9.845,12.771C12.252,13.69,12.174,13.688,12.1,13.686ZM.884,1.941a1.306,1.306,0,0,0-.487,1C.376,5.658,6.052,13.1,12.108,13.289c4,.128,7.189-3.078,8.823-6.118,1.317-2.449,1.7-4.926.921-6.023C21.181.2,20.679.3,19.018.622A27.974,27.974,0,0,1,9.7.977a33.218,33.218,0,0,0-3.51-.2C3.613.773,1.746,1.173.884,1.941Z" transform="translate(0 0)" fill="none"/></clipPath></defs><g id="Group_1354" data-name="Group 1354" transform="translate(-2098.948 -203.859)"><g id="Group_1382" data-name="Group 1382" transform="translate(2098.948 203.859)"><g id="Group_1354-2" data-name="Group 1354" transform="translate(42.214 91.228)"><path id="Path_5348" data-name="Path 5348" d="M2210.315,434.871c.513,3.081-3.934,27.417-3.934,27.417s7.085,4.457,12.852,3.57c4.641-.714,6.231-2.611,6.231-2.611a81.849,81.849,0,0,1,3.157-18.461C2231.567,434.539,2210.315,434.871,2210.315,434.871Z" transform="translate(-2205.984 -434.472)" fill="#fff" fill-rule="evenodd"/><path id="Path_5349" data-name="Path 5349" d="M2217.023,465.768c-5.428,0-11.19-3.581-11.457-3.749a.4.4,0,0,1-.179-.407c1.534-8.394,4.33-24.9,3.933-27.281a.4.4,0,0,1,.385-.462c.56-.011,13.829-.155,17.847,5.095a5.731,5.731,0,0,1,.847,5.327,82.247,82.247,0,0,0-3.142,18.362.4.4,0,0,1-.092.245c-.069.082-1.741,2.02-6.474,2.748A10.984,10.984,0,0,1,2217.023,465.768Zm-10.807-4.283c1.249.736,7.368,4.14,12.353,3.376,3.83-.59,5.515-2.013,5.9-2.385a84.086,84.086,0,0,1,3.167-18.4,4.916,4.916,0,0,0-.715-4.625c-3.393-4.434-14.467-4.764-16.78-4.783C2210.282,438.922,2206.706,458.792,2206.216,461.485Z" transform="translate(-2205.38 -433.867)" fill="#2c2826"/></g><g id="Group_1355" data-name="Group 1355" transform="translate(0 0.385)"><path id="Path_5350" data-name="Path 5350" d="M2144.409,304.629c-.052.733-13.359,10.6-18.223,11.728,0,0,2.917-15.691,1.18-12.353-4.226,8.117-21.031,6.333-21.031,6.333s12.409-10.259,7.93-16.414c0,0-10.655,7.086-14.708,7.164s13.748-9.738,6.844-21.272-3.888-39.731,12.039-51.472,6.249-23.515,6.249-23.515,10.1,13,9.292,14.048,10.121-7.74,9.677-11.82,3.53,7.244,3.53,7.244,30-6.757,42.888,12.633,19.06,22.407,22.7,22.632-10.234,4.675-13.852.148-4.862,17.2,3.57,21.418c1.586.793-16.479-1.624-17.452-1.983S2144.409,304.629,2144.409,304.629Z" transform="translate(-2098.948 -204.829)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1356" data-name="Group 1356" transform="translate(20.965 37.07)"><path id="Path_5351" data-name="Path 5351" d="M2162.968,349.372s2.365,10.059,11.267,14.858,17.076,7.043,30.066,3.83,21.994-17.492,23.822-34.555-1.645-22.869-1.645-22.869-23.56-12.107-25.028-12.318-36.772,4.625-37.138,4.6-11.508,16.841-11.508,16.841l1.084,11.271s.039,14.593,4.981,17.13S2162.968,349.372,2162.968,349.372Z" transform="translate(-2152.408 -297.918)" fill="#fff"/><path id="Path_5352" data-name="Path 5352" d="M2192.422,369.371c-7.193,0-12.915-2.121-18.978-5.389-7.634-4.115-10.567-12.125-11.281-14.462h0c-.545,0-1.634-.353-4.073-1.605-5.1-2.618-5.2-16.877-5.2-17.482l-1.082-11.234a.39.39,0,0,1,.064-.256c.028-.042,2.818-4.267,5.618-8.433,5.788-8.614,5.93-8.6,6.248-8.585.21-.013,3.581-.459,7.85-1.023,14.289-1.887,28.321-3.707,29.318-3.574,1.49.214,22.735,11.116,25.153,12.358a.4.4,0,0,1,.159.149,16.656,16.656,0,0,1,1.559,5.17c.588,3.3,1.09,9.084.14,17.945-1.934,18.055-11.4,31.753-24.121,34.9A47.269,47.269,0,0,1,2192.422,369.371Zm-29.607-20.445c.433,1.551,3.132,10.112,11.006,14.357,8.76,4.722,16.8,7,29.783,3.793,12.392-3.064,21.625-16.493,23.523-34.212,1.666-15.545-1.128-21.718-1.542-22.531-9.441-4.851-23.756-12.068-24.793-12.222-1.037-.134-19.293,2.279-29.1,3.575-5.6.739-7.313.963-7.821,1.015-.869.962-7.116,10.288-11.26,16.56l1.071,11.131c0,.18.1,14.418,4.768,16.816a15.3,15.3,0,0,0,3.525,1.5.4.4,0,0,1,.725-.146A.733.733,0,0,1,2162.815,348.927Zm.867-46.211a.4.4,0,0,0,.079,0C2163.719,302.715,2163.695,302.715,2163.682,302.715Z" transform="translate(-2151.805 -297.321)" fill="#2c2826"/></g><g id="Group_1357" data-name="Group 1357" transform="translate(7.866 28.32)"><path id="Path_5353" data-name="Path 5353" d="M2158.814,276.264c28.986-.674,40.795-4.1,47.626,7.353s8.488,23.273,17.9,26.009a63.7,63.7,0,0,1-37.217-9.748s5.528,12.558,4.776,14.494c0,0-18.463-14.688-26.579-16.053s-10.562-4.057-10.562-4.057,1.524,13.832-2.658,21.73-2.5,20.3-.741,24.038c0,0-7.779-3.779-8.865-10.744s-10.633-7.568-12.712-9.228-11.833-14.5-10.943-16.646" transform="translate(-2118.78 -275.261)" fill="#2c2826"/></g><g id="Group_1358" data-name="Group 1358" transform="translate(70.621 68.371)"><path id="Path_5354" data-name="Path 5354" d="M2278,377.456s2.193-.846,2.906.844-2.482,2.8-2.482,2.8" transform="translate(-2277.606 -376.845)" fill="#fff" fill-rule="evenodd"/><path id="Path_5355" data-name="Path 5355" d="M2277.823,380.892a.4.4,0,0,1-.13-.771c.506-.176,1.9-.807,2.243-1.591a.806.806,0,0,0,0-.682c-.559-1.321-2.323-.658-2.4-.629a.4.4,0,1,1-.286-.74c.882-.341,2.732-.558,3.415,1.06a1.589,1.589,0,0,1-.01,1.313c-.55,1.237-2.488,1.941-2.707,2.017A.39.39,0,0,1,2277.823,380.892Z" transform="translate(-2277.003 -376.239)" fill="#2c2826"/></g><g id="Group_1359" data-name="Group 1359" transform="translate(47.562 57.836)"><path id="Path_5356" data-name="Path 5356" d="M2226.946,352.2a2.3,2.3,0,0,0,1.281-.528,2.577,2.577,0,0,0,.614-1.936c-.109-.232-.327.263-1.705.105-1.354-.155-6.143-.04-8.162,4.029-.347.7.181.99.765.559A8.931,8.931,0,0,1,2226.946,352.2Z" transform="translate(-2218.863 -349.678)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1360" data-name="Group 1360" transform="translate(81.882 58.734)"><path id="Path_5357" data-name="Path 5357" d="M2307.325,354.462a2.3,2.3,0,0,1-1.282-.524,2.578,2.578,0,0,1-.62-1.934c.108-.232.328.262,1.706.1,1.353-.159,6.142-.059,8.175,4,.349.7-.178.991-.764.562A8.927,8.927,0,0,0,2307.325,354.462Z" transform="translate(-2305.393 -351.941)" fill="#2c2826" fill-rule="evenodd"/></g><g id="Group_1361" data-name="Group 1361" transform="translate(6.556 19.784)"><path id="Path_5358" data-name="Path 5358" d="M2128.1,292.091c6.585-11.536,15.676-21.927,47.1-25.22s33.758,10.657,33.758,10.657.1-17.248-19.951-21.411-47.071.718-60.437,22.344-12.049,30.012-12.049,30.012l1.844,5.787S2125.054,297.436,2128.1,292.091Z" transform="translate(-2116.089 -254.357)" fill="#fff"/><path id="Path_5359" data-name="Path 5359" d="M2117.76,314.039h-.014a.4.4,0,0,1-.364-.276l-1.844-5.786a.345.345,0,0,1-.014-.059c-.055-.348-1.187-8.779,12.1-30.282,6.167-9.978,15.826-17.245,27.932-21.013a66.871,66.871,0,0,1,32.923-1.512c10.509,2.182,15.462,7.988,17.766,12.474a22.037,22.037,0,0,1,2.5,9.328.4.4,0,0,1-.788.063c-.005-.033-.634-3.406-5-6.349-7.368-4.97-19.473-4.907-28.329-3.979-31.91,3.344-40.617,14.2-46.8,25.023h0c-3,5.259-9.644,21.951-9.71,22.119A.4.4,0,0,1,2117.76,314.039Zm-1.455-6.27,1.5,4.7c1.5-3.741,6.755-16.652,9.348-21.193,6.282-11.006,15.118-22.035,47.4-25.418,13.129-1.376,22.862.023,28.928,4.16a14.066,14.066,0,0,1,4.191,4.269,22.709,22.709,0,0,0-2.147-6.373c-2.228-4.319-7.021-9.913-17.2-12.027-20.434-4.244-46.917.965-60.019,22.164C2115.523,298.729,2116.244,307.245,2116.3,307.77Z" transform="translate(-2115.478 -253.739)" fill="#2c2826"/></g><g id="Group_1367" data-name="Group 1367" transform="translate(38.765)"><g id="Group_1362" data-name="Group 1362" transform="translate(0 8.221)"><path id="Path_5360" data-name="Path 5360" d="M2204.891,225.906c-5.47,2.509-11.342,20.314-3.154,24.574,5.736,2.984,14.8,2,18.132-.252,3.925-2.654,9.579-14.97,8.2-17.009C2224.039,227.261,2207.938,224.508,2204.891,225.906Z" transform="translate(-2197.288 -225.167)" fill="#fff"/><path id="Path_5361" data-name="Path 5361" d="M2209.879,252.153a19.74,19.74,0,0,1-8.93-1.9c-2.021-1.051-4.4-3.506-4.259-9.228.163-6.577,3.775-14.381,7.431-16.058h0c3.2-1.468,19.585,1.409,23.671,7.451,1.606,2.375-4.294,14.847-8.305,17.56C2217.609,251.246,2213.858,252.153,2209.879,252.153Zm-5.427-26.467c-3.363,1.543-6.815,9.15-6.969,15.357-.072,2.933.533,6.788,3.832,8.5,5.7,2.966,14.546,1.922,17.727-.229,3.77-2.55,9.3-14.677,8.093-16.459-3.885-5.745-19.853-8.473-22.683-7.175Z" transform="translate(-2196.684 -224.587)" fill="#2c2826"/></g><g id="Group_1363" data-name="Group 1363" transform="translate(3.751 6.426)"><path id="Path_5362" data-name="Path 5362" d="M2211.79,222.079c-5.47,2.509-7.231,11.108.957,15.368,5.736,2.984,14.8,2,18.132-.252,3.924-2.654,5.125-9.758-2.324-13.585C2222.157,220.324,2214.837,220.681,2211.79,222.079Z" transform="translate(-2206.745 -220.664)" fill="#fff"/><path id="Path_5363" data-name="Path 5363" d="M2220.889,239.1a19.739,19.739,0,0,1-8.93-1.9c-3.783-1.968-5.9-5.115-5.816-8.633a8.462,8.462,0,0,1,4.877-7.447,16.919,16.919,0,0,1,7.311-1.026,24.261,24.261,0,0,1,9.8,2.565c3.452,1.773,5.455,4.444,5.639,7.52a7.706,7.706,0,0,1-3.274,6.746C2228.619,238.191,2224.868,239.1,2220.889,239.1Zm-9.538-17.261a7.662,7.662,0,0,0-4.415,6.746c-.08,3.2,1.884,6.087,5.388,7.91,5.7,2.966,14.546,1.922,17.727-.228a6.9,6.9,0,0,0,2.927-6.041c-.167-2.785-2.018-5.222-5.21-6.862-6.352-3.263-13.552-2.838-16.417-1.523Z" transform="translate(-2206.141 -220.061)" fill="#2c2826"/></g><g id="Group_1364" data-name="Group 1364" transform="translate(11.477 0.965)"><path id="Path_5364" data-name="Path 5364" d="M2231.779,207.465c-2.928,1.344-7.788,14.336-3.4,16.617,3.071,1.6,6.368,1.242,8.15.037,2.1-1.421,8.4-11.647,7.663-12.739C2242.031,208.19,2233.411,206.716,2231.779,207.465Z" transform="translate(-2226.224 -206.884)" fill="#fff"/><path id="Path_5365" data-name="Path 5365" d="M2232.068,224.958a9.707,9.707,0,0,1-4.481-1.117c-1.344-.7-2.023-2.331-1.964-4.717.114-4.6,3.084-11.555,5.387-12.611h0c1.79-.819,10.614.669,12.9,4.053.566.838-1.186,4.092-2.756,6.674-1.658,2.726-3.851,5.829-5.014,6.615A7.415,7.415,0,0,1,2232.068,224.958Zm-.728-17.725c-2.171,1-4.829,8.056-4.924,11.91-.035,1.439.2,3.3,1.538,3.995a7.9,7.9,0,0,0,7.744.06c.881-.6,2.8-3.139,4.667-6.185,2.29-3.736,2.98-5.681,2.877-6.029-2.029-2.995-10.414-4.433-11.9-3.751Z" transform="translate(-2225.62 -206.292)" fill="#2c2826"/></g><g id="Group_1365" data-name="Group 1365" transform="translate(14.787)"><path id="Path_5366" data-name="Path 5366" d="M2237.453,205.416c-2.928,1.344-3.871,5.947.512,8.228,3.071,1.6,7.925,1.07,9.708-.135,2.1-1.421,2.744-5.224-1.244-7.273C2243,204.477,2239.084,204.668,2237.453,205.416Z" transform="translate(-2234.568 -204.469)" fill="#fff"/><path id="Path_5367" data-name="Path 5367" d="M2242.036,214.419a10.744,10.744,0,0,1-4.858-1.034,5.315,5.315,0,0,1-3.212-4.79,4.715,4.715,0,0,1,2.718-4.15h0c1.691-.775,5.7-1.032,9.322.828a5.139,5.139,0,0,1,3.119,4.178,4.315,4.315,0,0,1-1.834,3.776A10.386,10.386,0,0,1,2242.036,214.419Zm-5.021-9.253a3.916,3.916,0,0,0-2.256,3.449,4.554,4.554,0,0,0,2.785,4.067c2.947,1.532,7.675.989,9.3-.112a3.506,3.506,0,0,0,1.487-3.072,4.382,4.382,0,0,0-2.689-3.52c-3.346-1.719-7.128-1.5-8.629-.812Z" transform="translate(-2233.964 -203.859)" fill="#2c2826"/></g><g id="Group_1366" data-name="Group 1366" transform="translate(17.3 1.697)"><path id="Path_5368" data-name="Path 5368" d="M2242.917,209.5c-1.9.873-2.515,3.863.332,5.344a7.517,7.517,0,0,0,6.305-.087c1.365-.923,1.782-3.394-.808-4.724A7.622,7.622,0,0,0,2242.917,209.5Z" transform="translate(-2240.904 -208.743)" fill="#fff"/><path id="Path_5369" data-name="Path 5369" d="M2245.734,215.282a7.269,7.269,0,0,1-3.271-.7,3.585,3.585,0,0,1-2.161-3.238,3.2,3.2,0,0,1,1.846-2.819h0a7.965,7.965,0,0,1,6.176.54,3.411,3.411,0,0,1,2.1,2.83,2.943,2.943,0,0,1-1.252,2.575A6.6,6.6,0,0,1,2245.734,215.282Zm-3.254-6.032h0a2.4,2.4,0,0,0-1.384,2.118,2.823,2.823,0,0,0,1.735,2.514,7.154,7.154,0,0,0,5.9-.064,2.135,2.135,0,0,0,.9-1.871,2.716,2.716,0,0,0-1.672-2.172A7.212,7.212,0,0,0,2242.479,209.251Z" transform="translate(-2240.302 -208.138)" fill="#2c2826"/></g></g><g id="Group_1373" data-name="Group 1373" transform="translate(71.258 2.401)"><g id="Group_1368" data-name="Group 1368" transform="translate(0 6.866)"><path id="Path_5370" data-name="Path 5370" d="M2285.64,228.534c-4.58,2.1-9.5,17.011-2.641,20.578,4.8,2.5,12.4,1.675,15.183-.211,3.286-2.223,8.021-12.535,6.866-14.243C2301.675,229.67,2288.192,227.364,2285.64,228.534Z" transform="translate(-2279.21 -227.834)" fill="#fff"/><path id="Path_5371" data-name="Path 5371" d="M2289.718,250.452a16.592,16.592,0,0,1-7.5-1.6c-2.416-1.257-3.694-4.022-3.6-7.786.137-5.528,3.179-12.09,6.26-13.5h0c2.76-1.264,16.37,1.038,19.9,6.262.94,1.39-1.092,5.955-1.737,7.32-1.32,2.794-3.388,6.225-5.235,7.474C2296.222,249.688,2293.066,250.452,2289.718,250.452Zm-4.515-22.167h0c-2.8,1.283-5.669,7.625-5.8,12.8-.06,2.437.441,5.64,3.175,7.062,4.754,2.473,12.128,1.606,14.778-.187,1.412-.955,3.36-3.764,4.962-7.156,1.661-3.517,2.166-5.992,1.8-6.537C2300.877,229.48,2287.565,227.2,2285.2,228.285Z" transform="translate(-2278.607 -227.224)" fill="#2c2826"/></g><g id="Group_1369" data-name="Group 1369" transform="translate(3.141 5.38)"><path id="Path_5372" data-name="Path 5372" d="M2291.418,225.33c-4.58,2.1-6.055,9.3.8,12.869,4.8,2.5,12.4,1.675,15.183-.211,3.286-2.223,4.292-8.171-1.946-11.376C2300.1,223.861,2293.97,224.16,2291.418,225.33Z" transform="translate(-2287.13 -224.08)" fill="#fff"/><path id="Path_5373" data-name="Path 5373" d="M2298.938,239.545a16.592,16.592,0,0,1-7.505-1.6c-3.19-1.66-4.978-4.316-4.9-7.288a7.149,7.149,0,0,1,4.121-6.293,14.193,14.193,0,0,1,6.152-.865,20.378,20.378,0,0,1,8.232,2.155c2.911,1.5,4.6,3.751,4.758,6.35a6.52,6.52,0,0,1-2.771,5.707C2305.441,238.781,2302.286,239.545,2298.938,239.545Zm-3.112-15.274a12.406,12.406,0,0,0-4.845.816h0a6.351,6.351,0,0,0-3.659,5.592c-.066,2.657,1.566,5.049,4.477,6.565,4.755,2.473,12.127,1.6,14.778-.188a5.713,5.713,0,0,0,2.423-5c-.139-2.309-1.676-4.33-4.329-5.692A19.651,19.651,0,0,0,2295.825,224.271Zm-5.01.456h0Z" transform="translate(-2286.526 -223.476)" fill="#2c2826"/></g><g id="Group_1370" data-name="Group 1370" transform="translate(9.611 0.811)"><path id="Path_5374" data-name="Path 5374" d="M2308.157,213.093c-2.452,1.125-6.522,12-2.851,13.915a6.984,6.984,0,0,0,6.825.031c1.76-1.19,7.036-9.752,6.417-10.667C2316.741,213.7,2309.523,212.466,2308.157,213.093Z" transform="translate(-2303.44 -212.546)" fill="#fff"/><path id="Path_5375" data-name="Path 5375" d="M2308.3,227.714a8.192,8.192,0,0,1-3.781-.942c-1.148-.6-1.729-1.985-1.679-4.011.1-3.87,2.6-9.724,4.548-10.616,1.511-.692,8.954.562,10.884,3.417.4.586-.38,2.49-2.307,5.659-1.392,2.289-3.236,4.9-4.216,5.559A6.281,6.281,0,0,1,2308.3,227.714Zm.44-14.987a2.726,2.726,0,0,0-1.021.138h0c-1.534.7-3.992,6.143-4.086,9.915-.029,1.187.164,2.721,1.252,3.288a6.555,6.555,0,0,0,6.419.054c1.767-1.2,6.453-9.1,6.293-10.141C2316.156,213.9,2311.087,212.727,2308.74,212.727Zm8.855,3.237Zm-10.041-3.459h0Z" transform="translate(-2302.837 -211.958)" fill="#2c2826"/></g><g id="Group_1371" data-name="Group 1371" transform="translate(12.381)"><path id="Path_5376" data-name="Path 5376" d="M2312.908,211.377c-2.452,1.125-3.242,4.98.428,6.89,2.572,1.338,6.636.9,8.129-.113,1.76-1.19,2.3-4.374-1.042-6.09A9.827,9.827,0,0,0,2312.908,211.377Z" transform="translate(-2310.427 -210.52)" fill="#fff"/><path id="Path_5377" data-name="Path 5377" d="M2316.646,218.9a9,9,0,0,1-4.1-.889,4.512,4.512,0,0,1-2.725-4.069,4.014,4.014,0,0,1,2.314-3.532h0a10.14,10.14,0,0,1,7.862.694,4.287,4.287,0,0,1,2.647,3.553,3.677,3.677,0,0,1-1.563,3.219A8.73,8.73,0,0,1,2316.646,218.9Zm-4.177-7.77a3.215,3.215,0,0,0-1.852,2.831,3.752,3.752,0,0,0,2.3,3.347c2.448,1.273,6.373.823,7.723-.09a2.871,2.871,0,0,0,1.217-2.514,3.612,3.612,0,0,0-2.218-2.895,9.423,9.423,0,0,0-7.169-.679Z" transform="translate(-2309.823 -209.912)" fill="#2c2826"/></g><g id="Group_1372" data-name="Group 1372" transform="translate(14.486 1.421)"><path id="Path_5378" data-name="Path 5378" d="M2317.483,214.793c-1.593.731-2.106,3.235.278,4.475a6.3,6.3,0,0,0,5.28-.073c1.143-.773,1.492-2.841-.677-3.956A6.381,6.381,0,0,0,2317.483,214.793Z" transform="translate(-2315.733 -214.099)" fill="#fff"/><path id="Path_5379" data-name="Path 5379" d="M2319.741,219.6a6.15,6.15,0,0,1-2.767-.589,3.064,3.064,0,0,1-1.844-2.77,2.748,2.748,0,0,1,1.584-2.417h0a6.737,6.737,0,0,1,5.228.454,2.919,2.919,0,0,1,1.794,2.423,2.531,2.531,0,0,1-1.076,2.214A5.609,5.609,0,0,1,2319.741,219.6Zm-2.7-5.055h0a1.948,1.948,0,0,0-1.121,1.716,2.233,2.233,0,0,0,1.418,2.047,5.915,5.915,0,0,0,4.875-.05,1.724,1.724,0,0,0,.729-1.51,2.212,2.212,0,0,0-1.365-1.765A5.964,5.964,0,0,0,2317.045,214.549Z" transform="translate(-2315.13 -213.495)" fill="#2c2826"/></g></g><g id="Group_1378" data-name="Group 1378" transform="translate(58.921 81.708)"><path id="Path_5380" data-name="Path 5380" d="M2248.5,413.789c.016-2.06,3.6-3.01,9.743-2.352,9.407,1.008,10.771-2.014,12.431.336,2.07,2.93-2.888,12.989-10.079,12.767C2254.541,424.354,2248.477,416.934,2248.5,413.789Z" transform="translate(-2248.105 -410.462)" fill="#2c2826" fill-rule="evenodd"/><path id="Path_5381" data-name="Path 5381" d="M2260.231,424.343q-.124,0-.25,0c-6.257-.193-12.506-7.768-12.479-11.151h0a2.084,2.084,0,0,1,.752-1.583c1.4-1.25,4.751-1.663,9.43-1.161a27.259,27.259,0,0,0,9.081-.346c1.662-.323,2.667-.52,3.632.847s.63,4.067-.869,6.857C2267.815,420.989,2264.487,424.343,2260.231,424.343ZM2248.295,413.2c-.021,2.72,5.655,10.165,11.711,10.351,4,.128,7.189-3.079,8.823-6.118,1.317-2.45,1.7-4.927.921-6.024-.67-.948-1.172-.85-2.833-.526a27.975,27.975,0,0,1-9.317.355c-4.388-.47-7.6-.119-8.817.964a1.306,1.306,0,0,0-.487,1Z" transform="translate(-2247.502 -409.865)" fill="#2c2826"/><g id="Group_1377" data-name="Group 1377" transform="translate(0.396 0.392)" clip-path="url(#clip-path)"><g id="Group_1374" data-name="Group 1374" transform="translate(3.137 8.342)"><path id="Path_5382" data-name="Path 5382" d="M2257.924,433.1a16.941,16.941,0,0,1,7.11.35c5.712,1.34,6.942,7.882,6.942,7.882s-5.2,1.044-8.856-.276S2256.1,434.256,2257.924,433.1Z" transform="translate(-2257.015 -432.494)" fill="#fff" fill-rule="evenodd"/><path id="Path_5383" data-name="Path 5383" d="M2267.08,441.523a14.18,14.18,0,0,1-4.7-.695c-2.916-1.051-5.711-4.683-5.953-6.918a1.666,1.666,0,0,1,.679-1.746.386.386,0,0,1,.121-.051,17.22,17.22,0,0,1,7.291.349c5.9,1.383,7.228,8.127,7.241,8.2a.4.4,0,0,1-.311.462A24.422,24.422,0,0,1,2267.08,441.523Zm-9.6-8.652a1.006,1.006,0,0,0-.262.954c.214,1.972,2.815,5.314,5.433,6.258,2.932,1.056,6.959.537,8.237.331-.372-1.4-1.952-6.1-6.549-7.179A17.182,17.182,0,0,0,2257.48,432.87Z" transform="translate(-2256.412 -431.887)"/></g><g id="Group_1375" data-name="Group 1375" transform="translate(5.009 -0.8)"><path id="Path_5384" data-name="Path 5384" d="M2261.335,408.838s-.668,2.456.412,2.854,1.9.7,2.091-.148a18.11,18.11,0,0,0,.234-2.47l.671.247s-.649,2.184.022,2.446a2.21,2.21,0,0,0,1.95.121c.739-.341.692-1.878.692-1.878l.664.16s-.764,1.643.389,1.909,2.679.4,2.632-.417a13.13,13.13,0,0,1,.29-2.365s.071,2.958.611,3.157,2.154.4,2.393-.122.242-3.462.343-3.395S2261.335,408.838,2261.335,408.838Z" transform="translate(-2261.131 -408.838)" fill="#fff" fill-rule="evenodd"/></g><g id="Group_1376" data-name="Group 1376" transform="translate(1.885 7.824)"><path id="Path_5385" data-name="Path 5385" d="M2262.074,435.744s-3.454-6-7.821-3.6" transform="translate(-2253.857 -431.184)" fill="#fff" fill-rule="evenodd"/><path id="Path_5386" data-name="Path 5386" d="M2261.471,435.538a.4.4,0,0,1-.344-.2,11.317,11.317,0,0,0-2.2-2.607c-1.728-1.464-3.438-1.746-5.086-.838a.4.4,0,0,1-.383-.695c4.652-2.565,8.319,3.681,8.356,3.745a.4.4,0,0,1-.343.595Z" transform="translate(-2253.253 -430.581)"/></g></g></g><g id="Group_1379" data-name="Group 1379" transform="translate(72.923 94.306)"><path id="Path_5389" data-name="Path 5389" d="M2282.8,441.629" transform="translate(-2282.805 -441.629)" fill="#fff" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" fill-rule="evenodd"/></g><g id="Group_1380" data-name="Group 1380" transform="translate(82.967 66.397)"><ellipse id="Ellipse_162" data-name="Ellipse 162" cx="3.257" cy="1.68" rx="3.257" ry="1.68" transform="matrix(0.046, -0.999, 0.999, 0.046, 0, 6.507)" fill="#2c2826"/></g><g id="Group_1381" data-name="Group 1381" transform="translate(51.711 67.458)"><path id="Path_5390" data-name="Path 5390" d="M2230.324,376.2a4.874,4.874,0,0,1,6.706.212" transform="translate(-2229.928 -374.535)" fill="#fff" fill-rule="evenodd"/><path id="Path_5391" data-name="Path 5391" d="M2236.427,376.212a.392.392,0,0,1-.275-.111,4.453,4.453,0,0,0-6.168-.2.4.4,0,0,1-.526-.593c.036-.033,3.693-3.209,7.245.223a.4.4,0,0,1-.276.682Z" transform="translate(-2229.325 -373.938)" fill="#2c2826"/></g></g><g id="Group_1383" data-name="Group 1383" transform="translate(2192.12 283.798)"><path id="Path_5392" data-name="Path 5392" d="M2382.7,413.914a9.52,9.52,0,0,1,1.149-.366,1.186,1.186,0,0,1,1.382.888c.187.641-.149,1-.693,1.234l-2.639,1.143c.12.487.383.939.266,1.244-.129.334-.6.539-.937.79-2.334,1.764-5.166,2.28-7.862,3.141-1.263.4-2.495.906-3.765,1.281-1.369.4-2.764.722-4.154,1.052a7.97,7.97,0,0,1-1.272.158c-3.423.242-3.911.81-7.754,9.506-.292.661-6.179,14.552-8.024,15.492,0,0-14.563.9-13.485.4,2.325-1.084,18.37-31.035,20.354-32.638a3.531,3.531,0,0,0,1.255-2.165,6.147,6.147,0,0,1,2.835-4.2c.039-.031,3.163-1.843,4.214-2.714a1.008,1.008,0,0,1,1.661.228c.959,1.319-.247,3.112-1.879,4.234-.673,1.3,2.224.307,3.3.041,2.205-.548,3.651-2.164,5.44-3.289,1.428-.9,2.84-1.823,4.289-2.685a1.956,1.956,0,0,1,1.215-.264,1.322,1.322,0,0,1,.872.676,1.107,1.107,0,0,1-.251.978c-.937.91-1.921,1.776-2.925,2.611-1.158.963-2.36,1.871-3.529,2.822-.123.1-.249.4-.194.476a1.858,1.858,0,0,0,.664.56c.143.067.391-.03.567-.108q4.858-2.132,9.706-4.284c.869-.388,1.379-.355,1.827.215.489.62.421,1.084-.252,1.5-1.561.963-3.132,1.912-4.7,2.868-.169.1-.332.218-.5.327A36.474,36.474,0,0,0,2382.7,413.914Z" transform="translate(-2334.46 -406.008)" fill="#fff"/><path id="Path_5393" data-name="Path 5393" d="M2335.639,449.825c-1.667,0-1.705-.15-1.77-.4a.437.437,0,0,1,.273-.51c1.188-.554,7.287-11.064,11.74-18.738,4.712-8.12,7.645-13.134,8.531-13.849a3.139,3.139,0,0,0,1.115-1.936c.437-2.156,1.236-3.073,2.981-4.434.008-.007.092-.06.239-.146a38.918,38.918,0,0,0,3.967-2.56,1.536,1.536,0,0,1,1.176-.421,1.585,1.585,0,0,1,1.059.721,2.177,2.177,0,0,1,.381,1.687,5.2,5.2,0,0,1-2.253,3.035,9.234,9.234,0,0,0,2.3-.445c.218-.061.414-.115.571-.154a10.116,10.116,0,0,0,3.679-2.064c.526-.4,1.069-.813,1.645-1.176q.638-.4,1.271-.806c.985-.627,2-1.276,3.027-1.884a2.343,2.343,0,0,1,1.481-.315,1.718,1.718,0,0,1,1.173.911,1.486,1.486,0,0,1-.341,1.418c-.864.839-1.828,1.7-2.948,2.631-.658.548-1.34,1.085-2,1.6-.513.4-1.026.808-1.532,1.22a.339.339,0,0,0-.028.049,1.414,1.414,0,0,0,.383.3,1.168,1.168,0,0,0,.274-.1c3.156-1.385,6.419-2.817,9.7-4.282a1.711,1.711,0,0,1,2.3.331,1.445,1.445,0,0,1,.387,1.151,1.414,1.414,0,0,1-.743.932q-1.373.847-2.753,1.684c.372-.12.731-.24,1.033-.348l.148-.053a8.531,8.531,0,0,1,1.05-.327,1.586,1.586,0,0,1,1.849,1.165,1.325,1.325,0,0,1-.917,1.709l-2.314,1,.034.1a1.552,1.552,0,0,1,.118,1.064,1.785,1.785,0,0,1-.789.776c-.1.061-.193.123-.279.187a18.34,18.34,0,0,1-6.224,2.678c-.588.17-1.175.34-1.756.525-.546.175-1.1.372-1.632.563-.7.249-1.416.506-2.142.72-1.214.358-2.464.653-3.673.938l-.5.119a8.176,8.176,0,0,1-1.328.168c-3.147.223-3.549.494-7.427,9.271l-.126.292c-2.842,6.592-6.551,14.613-8.081,15.393a.4.4,0,0,1-.156.042c-.034,0-3.4.209-6.741.368C2338.36,449.766,2336.681,449.825,2335.639,449.825Zm-.472-.8c2.188.024,8.421-.293,12.509-.544.834-.568,3.254-4.766,7.652-14.964l.129-.3c3.909-8.846,4.438-9.483,8.088-9.741a7.764,7.764,0,0,0,1.209-.149l.5-.119c1.2-.283,2.437-.576,3.631-.927.7-.208,1.413-.461,2.1-.706.541-.194,1.1-.393,1.657-.572.589-.188,1.183-.36,1.778-.531a17.49,17.49,0,0,0,5.966-2.548c.1-.077.215-.15.33-.223.192-.123.431-.275.477-.394a1.569,1.569,0,0,0-.128-.516c-.055-.156-.111-.32-.153-.489a.4.4,0,0,1,.227-.459l2.64-1.143c.513-.222.561-.446.469-.758a.792.792,0,0,0-.917-.612,7.706,7.706,0,0,0-.951.3l-.15.054h0c-4.085,1.456-4.187,1.225-4.312.931a.4.4,0,0,1,.146-.487l.152-.1c.118-.08.236-.159.357-.232l1.609-.981q1.545-.941,3.087-1.887c.158-.1.351-.245.378-.4a.818.818,0,0,0-.229-.52c-.24-.3-.477-.489-1.355-.1-3.287,1.466-6.552,2.9-9.708,4.284a1.116,1.116,0,0,1-.9.1,2.251,2.251,0,0,1-.813-.681c-.249-.332.07-.867.261-1.022.51-.415,1.026-.821,1.542-1.229.656-.516,1.333-1.05,1.983-1.59,1.1-.918,2.053-1.766,2.9-2.591a.794.794,0,0,0,.162-.541.952.952,0,0,0-.57-.437,1.56,1.56,0,0,0-.948.213c-1.012.6-2.026,1.247-3.006,1.871q-.636.406-1.275.809c-.546.343-1.076.746-1.587,1.136a10.889,10.889,0,0,1-3.968,2.2c-.151.037-.34.09-.55.148-1.6.442-2.759.714-3.195.177a.8.8,0,0,1,0-.934.4.4,0,0,1,.127-.144,4.564,4.564,0,0,0,2.023-2.588,1.367,1.367,0,0,0-.24-1.087.851.851,0,0,0-.516-.4.812.812,0,0,0-.571.244,44.681,44.681,0,0,1-4.068,2.632l-.183.109a5.771,5.771,0,0,0-2.664,3.946,3.891,3.891,0,0,1-1.394,2.395c-.817.661-4.644,7.254-8.344,13.631C2340.984,440.195,2336.992,446.982,2335.167,449.028Zm46.931-35.717h0Zm-19.052-.965Z" transform="translate(-2333.857 -405.405)" fill="#2c2826"/></g></g></svg>
        <label for="checkbox-3">Es war einfach</label>
      </div>
    </button>
		
		<div class="robo-wiki-feedback-form__wrapper" data-form="It was easy">

    <div class="robo-wiki-feedback-form__header">
      <div>
        <span class="robo-wiki-feedback-form__check">
        </span>
        <h3>Es war einfach</h3>
      </div>

			
      <span tabindex="0" class="robo-wiki-feedback-form__close">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
      </span>
    </div>

    <form class="robo-wiki-feedback-form__form">

			<h-captcha id="signupCaptcha"
				site-key=""
				size="invisible"
				tabindex="0"
        jsapi="https://js.hcaptcha.com/1/api.js?onload=onLoad" 
      >
      </h-captcha>

      <div>
        <input type="email" placeholder="Your email" data-gsp-name="Email (optional)" required />

        <textarea placeholder="Your comment" data-gsp-name="Feedback (optional)"></textarea>

        <input
          type="hidden"
          placeholder="location"
					data-gsp-name="Location"
					value="https://wiki.robonomics.network/de/docs/docs.11tydata.js"
        />

        <input
          type="hidden"
          placeholder="reaction"
					data-gsp-name="Reaction"
					value="It was easy"
        />

        <button class="robo-wiki-feedback-form__btn">
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--init">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
            <span>Erzählen Sie uns mehr</span>
          </div>
          <div class="robo-wiki-feedback-form__btn-wrapper robo-wiki-feedback-form__btn-wrapper--wait hide">
						  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: rgba(255, 255, 255, 0); display: block; shape-rendering: auto;" width="194px" height="194px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" class="loader">
    <g transform="rotate(0 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-1.0784313725490198s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(30 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.9803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(60 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.8823529411764707s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(90 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.7843137254901962s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(120 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.6862745098039216s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(150 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.5882352941176471s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(180 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.4901960784313726s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(210 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.3921568627450981s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(240 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.29411764705882354s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(270 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.19607843137254904s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(300 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="-0.09803921568627452s" repeatCount="indefinite"></animate>
      </rect>
    </g><g transform="rotate(330 50 50)">
      <rect x="46.5" y="22.5" rx="3.5" ry="3.5" width="7" height="7" fill="#fff">
        <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.1764705882352942s" begin="0s" repeatCount="indefinite"></animate>
      </rect>
    </g>
  </svg>
            <span>Ihre Informationen werden gesendet...</span>
          </div>
        </button>
      </div>
    </form>

		
    <div class="robo-wiki-feedback-form__success hide">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" aria-hidden="true"   ><!--!Font Awesome Free 6.6.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
      <div>Danke,<br/> Wir bleiben in Kontakt! </div>
    </div>

  </div>
  </div>
		
	</div>
</section>
							<div class="page-content__navigation-btns pageNextPrev">
	
	
	
	
	
		
		
		
	

</div>


							

					        





 <section class="docContribution">
	
 </section>


						
					</div>
        </div>

				<div id="sidebarContent" popover class="page__sidebar custom-scroll" >
					

					

					
					
					
		<a class="button inline-block primary button__small  " href="https://github.com/airalab/robonomics-wiki/issues/new?assignees=&labels=documentation&template=doc-issue.md&title=issue+for+document+page+-+Digitale+Zwillinge"> Erstellen Sie ein Problem</a>
        </div>
			</div>
			  <a class="question__link" href="https://discord.com/invite/JpaN2XAmqY">
    <span class="question__icon">?</span>
    <span class="question__text">
      Stellen Sie Ihre Frage
    </span>
  </a>
		</section>
	</main>



<footer class="footer">
    <div class="layout__page">
      <div class="footer-socials">
        <a class="footer-socials__link" href="https://github.com/airalab">
					
						

	<div  class="footer__icon">
		
			<?xml version="1.0" encoding="utf-8"?>
			<!-- Generator: Adobe Illustrator 24.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
				viewBox="0 0 512 490.7" style="enable-background:new 0 0 512 490.7;" xml:space="preserve" class="icon icon-fill inline-block">
			<style type="text/css">
				.st0{fill:#212121;}
			</style>
			<path class="st0" d="M256,0C114.6,0,0,112.6,0,251.6C0,362.7,73.3,457,175,490.2c12.8,2.4,17.5-5.4,17.5-12.1c0-6-0.2-21.8-0.3-42.8
				C121,450.5,106,401.6,106,401.6c-11.6-29-28.5-36.8-28.5-36.8c-23.2-15.6,1.8-15.3,1.8-15.3c25.7,1.7,39.2,25.9,39.2,25.9
				c22.8,38.5,59.9,27.3,74.6,20.9c2.3-16.3,8.9-27.3,16.2-33.6c-56.9-6.3-116.6-27.9-116.6-124.3c0-27.5,9.9-49.9,26.3-67.5
				c-2.9-6.4-11.5-31.9,2.2-66.6c0,0,21.4-6.7,70.4,25.8c20.5-5.6,42.2-8.4,64-8.5c21.8,0.1,43.5,2.9,64,8.5
				c48.6-32.5,70.1-25.8,70.1-25.8c13.8,34.6,5.1,60.2,2.6,66.6c16.3,17.6,26.2,40,26.2,67.5c0,96.6-59.8,117.9-116.8,124.1
				c9,7.6,17.3,23,17.3,46.5c0,33.7-0.3,60.7-0.3,68.9c0,6.6,4.5,14.5,17.6,11.9C438.7,456.9,512,362.6,512,251.6
				C512,112.6,397.4,0,256,0z"/>
			</svg>

		
  </div>
        </a>
        <a class="footer-socials__link" href="https://discord.gg/JpaN2XAmqY">
					
				

	<div  class="footer__icon">
		
		<svg xmlns="http://www.w3.org/2000/svg" width="46.268" height="35.112" viewBox="0 0 46.268 35.112" class="icon icon-fill inline-block">
			<path id="Path_6784" data-name="Path 6784" d="M46.714,24.606A39.356,39.356,0,0,0,42.308,7.713c-.734-1.375-1.582-2.688-2.4-4.019a1.166,1.166,0,0,0-.5-.417A38.1,38.1,0,0,0,30.543.515a.414.414,0,0,0-.525.271c-.281.6-.6,1.176-.858,1.783-.131.309-.293.365-.608.344A56.664,56.664,0,0,0,18.9,2.906c-.349.034-.53-.021-.676-.372-.252-.609-.585-1.182-.87-1.777a.389.389,0,0,0-.5-.242A38.146,38.146,0,0,0,7.947,3.292a1.167,1.167,0,0,0-.462.394C2.935,10.523-.17,19.306.624,27.623c.056.593.091,1.192.182,1.781a.939.939,0,0,0,.312.578,38.065,38.065,0,0,0,10.988,5.581c.291.093.462.068.63-.2.747-1.208,1.515-2.406,2.3-3.642l-3.92-1.9c.584-.788.833-.852,1.585-.536a27.134,27.134,0,0,0,21.959.014c.8-.341.927-.314,1.6.486-.643.339-1.261.686-1.9.992s-1.278.567-2.01.887c.653,1.07,1.254,2.1,1.9,3.11.6.937.625.929,1.674.576a37.706,37.706,0,0,0,10.349-5.361.947.947,0,0,0,.315-.579,25.4,25.4,0,0,0,.124-4.8M18.825,23.27a3.8,3.8,0,0,1-5.419.129,5.018,5.018,0,0,1,.076-7.234A3.967,3.967,0,0,1,19.9,18.081a14.114,14.114,0,0,1,.363,1.7,5.245,5.245,0,0,1-1.437,3.483m15.345,0a3.808,3.808,0,0,1-5.485.075,5.029,5.029,0,0,1,.027-7.083,3.972,3.972,0,0,1,6.525,1.815,5.993,5.993,0,0,1,.231.913,6.634,6.634,0,0,1,.06.714,4.9,4.9,0,0,1-1.358,3.566" transform="translate(-0.5 -0.5)" fill="#10161a" fill-rule="evenodd"/>
		</svg>
		
  </div>
        </a>
        <a class="footer-socials__link" href="https://twitter.com/AIRA_Robonomics">
					 

	<div  class="footer__icon">
		
		<svg xmlns="http://www.w3.org/2000/svg" width="38.764" height="31.496" viewBox="0 0 38.764 31.496" class="icon icon-fill inline-block">
			<path id="twitter" d="M38.764,51.729a16.569,16.569,0,0,1-4.579,1.255,7.9,7.9,0,0,0,3.5-4.392,15.882,15.882,0,0,1-5.039,1.924A7.946,7.946,0,0,0,18.9,55.949a8.183,8.183,0,0,0,.184,1.812A22.494,22.494,0,0,1,2.7,49.449,7.949,7.949,0,0,0,5.141,60.07a7.848,7.848,0,0,1-3.591-.979v.087a7.984,7.984,0,0,0,6.367,7.809,7.932,7.932,0,0,1-2.084.262,7.027,7.027,0,0,1-1.5-.136,8.023,8.023,0,0,0,7.426,5.536A15.968,15.968,0,0,1,1.9,76.039,14.885,14.885,0,0,1,0,75.929,22.373,22.373,0,0,0,12.191,79.5c14.624,0,22.619-12.114,22.619-22.614,0-.351-.012-.69-.029-1.027A15.854,15.854,0,0,0,38.764,51.729Z" transform="translate(0 -48)" fill="#10161a"/>
		</svg>
		
  </div>
        </a>
      </div>
      <div class="footer__links">
        <ul class="footer__list">
          <li class="footer__item">
            <a class="footer__link" href="/de/docs/edit-wiki/">
             Wie man das Wiki bearbeitet
            </a>
          </li>
          <li class="footer__item">
            <a class="footer__link" href="/de/privacy-policy/">
              Datenschutz-Bestimmungen
            </a>
          </li>
        </ul>

        
          <div class="footer-text">
            <span class=""> Die Übersetzung wurde von KI durchgeführt, daher können einige Ungenauigkeiten auftreten </span>
            <a href="https://github.com/airalab/robonomics-wiki/issues"> Bitte informieren Sie uns. </a>, bitte, wenn du etwas findest
          </div>
        

      </div>
    </div>
  </footer>
</body>
</html>
</div>