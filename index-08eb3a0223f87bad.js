window.__noodl_modules = [];
window.Noodl = {
    defineModule:function(m) {
        window.__noodl_modules.push(m);
    },
    deployed: true,
    Env: {}
}

window.projectData = {"settings":{"navigationPathType":"path","sitemap.enabled":true,"deployEnvDate":true,"deployEnvGitStats":true,"baseUrl":""},"components":[{"name":"/App","nodes":[{"id":"246f9453-a119-ac78-171e-3806cf596ecc","type":"Group","parameters":{"backgroundColor":"#FFFFFF","flexDirection":"row"},"ports":[],"children":[{"id":"875a0c34-b53d-857a-42e5-19797b24ede8","type":"/Sidebar","parameters":{},"ports":[],"children":[]},{"id":"99c4d84f-ffe0-e17a-017a-b3cb39c9b9eb","type":"Group","parameters":{},"ports":[],"children":[{"id":"a17cc055-c733-35d0-6173-1a964ad584a9","type":"Router","parameters":{"name":"Main","pages":{"routes":["/Home","/Settings","/Profile"],"startPage":"/Home"},"backgroundColor":"#606060"},"ports":[],"children":[]}]}]}],"connections":[],"ports":[],"roots":["246f9453-a119-ac78-171e-3806cf596ecc"],"metadata":{"canvasSize":{"width":"1039px","height":"751px"},"canvasPos":{"x":0,"y":0}}},{"name":"/Sidebar","nodes":[{"id":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","type":"States","parameters":{"states":"Open,Closed","currentState":"Closed","values":"Width,Logo Opacity","value-Open-Width":240,"value-Closed-Width":56,"transitiondef-Open":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"type-icon":"string","value-Open-icon":"close","value-Closed-icon":"menu","value-Open-Logo Opacity":1,"value-Closed-Logo Opacity":0},"ports":[],"children":[]},{"id":"d33a6484-3964-c49d-910f-790b14b05f0c","type":"Component Inputs","parameters":{},"ports":[],"children":[]},{"id":"00612d39-0433-8242-d228-555216dfadc6","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"3cb1dda7-8a42-a29e-9fa4-fcce37a91316","type":"Switch","parameters":{},"ports":[],"children":[]},{"id":"11c062cb-5ded-7e2c-20d4-9b5e08fad278","type":"Group","parameters":{"width":{"value":56,"unit":"px"}},"ports":[],"children":[{"id":"d24afb3a-5640-0098-a9f5-a8d59aa56c07","type":"Group","parameters":{"width":{"value":240,"unit":"px"},"borderRightStyle":"solid","backgroundColor":"Grey - 200","borderRightWidth":{"value":1,"unit":"px"},"borderRightColor":"Grey - 400","clip":true,"position":"absolute","alignX":"left","zIndex":1,"marginRight":{"value":0,"unit":"px"},"marginLeft":{"value":0,"unit":"px"}},"ports":[],"children":[{"id":"5bc85a48-f1c4-77ab-0074-5b7010998170","type":"Group","parameters":{"height":{"value":56,"unit":"px"},"borderBottomStyle":"solid","borderBottomColor":"Grey - 400","justifyContent":"space-between","paddingLeft":{"value":8,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"alignItems":"center","borderBottomWidth":{"value":1,"unit":"px"},"flexDirection":"row","backgroundColor":"#C0C0C0"},"ports":[],"children":[{"id":"ea7403c5-c849-c8ce-c137-c2b958b4a9de","type":"net.noodl.controls.button","parameters":{"useIcon":true,"paddingLeft":{"value":8,"unit":"px"},"backgroundColor":"transparent","iconColor":"Grey - 700","color":"Grey - 700","iconSize":{"value":24,"unit":"px"},"textStyle":"Body Medium","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","label":"LANCENET","iconSpacing":{"value":8,"unit":"px"},"iconIconSource":{"class":"material-icons","code":"data_saver_off","codeAsClass":false},"boxShadowEnabled":false},"ports":[],"children":[]},{"id":"10e273b4-a938-5ba9-8198-be21aeabc8de","type":"net.noodl.controls.button","parameters":{"useIcon":true,"iconColor":"Grey - 700","backgroundColor":"transparent","position":"relative","paddingTop":{"value":0,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"paddingRight":{"value":0,"unit":"px"},"paddingLeft":{"value":0,"unit":"px"},"sizeMode":"explicit","marginTop":{"value":0,"unit":"px"},"iconSize":{"value":24,"unit":"px"},"useLabel":false,"enabled":true,"width":{"value":36,"unit":"px"},"height":{"value":36,"unit":"px"},"iconSpacing":{"value":0,"unit":"px"},"marginLeft":{"value":0,"unit":"px"},"marginRight":{"value":0,"unit":"px"},"marginBottom":{"value":0,"unit":"px"},"minWidth":{"value":0,"unit":"px"},"iconIconSource":{"class":"material-icons","code":"menu"}},"stateParameters":{"hover":{"iconColor":"Grey - 900"}},"ports":[],"children":[]},{"id":"5ee16a2e-2e5b-72a4-9633-d06f97e91c22","type":"net.noodl.controls.button","parameters":{"useIcon":true,"iconColor":"Grey - 700","backgroundColor":"transparent","position":"relative","paddingTop":{"value":0,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"paddingRight":{"value":0,"unit":"px"},"paddingLeft":{"value":0,"unit":"px"},"sizeMode":"explicit","marginTop":{"value":0,"unit":"px"},"iconSize":{"value":24,"unit":"px"},"useLabel":false,"enabled":true,"width":{"value":36,"unit":"px"},"height":{"value":36,"unit":"px"},"iconSpacing":{"value":0,"unit":"px"},"marginLeft":{"value":0,"unit":"px"},"marginRight":{"value":0,"unit":"px"},"marginBottom":{"value":0,"unit":"px"},"minWidth":{"value":0,"unit":"px"},"iconIconSource":{"class":"material-icons","code":"close"}},"stateParameters":{"hover":{"iconColor":"Grey - 900"}},"ports":[],"children":[]}]},{"id":"643e001e-4160-7737-fc06-518bd8b96a67","type":"/Sidebar/Navigation Menu","parameters":{"Margin Left":{"value":0,"unit":"px"},"Magin Top":{"value":0,"unit":"px"},"Items":"[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:\"home\",\n\n        // The label to be shown on the nav item\n        Label:\"Home\",\n\n        // The url to navigate to when clicked\n        Url:\"/home\",\n\n        // Setting this to true will indicate that this\n        // item should be selected if there is no path\n        // or if no other path matches\n        IsHome:true,\n    },\n\n    {\n        Icon:\"settings\",\n        Label:\"Settings\",\n        Url:\"/settings\"\n    },\n\n    {\n        Icon:\"account_circle\",\n        Label:\"Profile\",\n        Url:\"/profile\"\n    },\n]"},"ports":[],"children":[]}]}]}],"connections":[{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"Width","targetId":"d24afb3a-5640-0098-a9f5-a8d59aa56c07","targetPort":"width"},{"sourceId":"d33a6484-3964-c49d-910f-790b14b05f0c","sourcePort":"Open","targetId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","targetPort":"to-Open"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"at-Open","targetId":"00612d39-0433-8242-d228-555216dfadc6","targetPort":"Is Open"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"at-Closed","targetId":"00612d39-0433-8242-d228-555216dfadc6","targetPort":"Is Closed"},{"sourceId":"d33a6484-3964-c49d-910f-790b14b05f0c","sourcePort":"Close","targetId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","targetPort":"to-Closed"},{"sourceId":"10e273b4-a938-5ba9-8198-be21aeabc8de","sourcePort":"onClick","targetId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","targetPort":"to-Open"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"at-Closed","targetId":"10e273b4-a938-5ba9-8198-be21aeabc8de","targetPort":"mounted"},{"sourceId":"3cb1dda7-8a42-a29e-9fa4-fcce37a91316","sourcePort":"state","targetId":"5ee16a2e-2e5b-72a4-9633-d06f97e91c22","targetPort":"mounted"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"reached-Open","targetId":"3cb1dda7-8a42-a29e-9fa4-fcce37a91316","targetPort":"on"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"at-Closed","targetId":"3cb1dda7-8a42-a29e-9fa4-fcce37a91316","targetPort":"off"},{"sourceId":"5ee16a2e-2e5b-72a4-9633-d06f97e91c22","sourcePort":"onClick","targetId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","targetPort":"to-Closed"},{"sourceId":"d24afb3a-5640-0098-a9f5-a8d59aa56c07","sourcePort":"focusLost","targetId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","targetPort":"to-Closed"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"Logo Opacity","targetId":"ea7403c5-c849-c8ce-c137-c2b958b4a9de","targetPort":"opacity"},{"sourceId":"a25b42e9-2fd1-29d2-0f4e-975e49eb9c22","sourcePort":"at-Open","targetId":"ea7403c5-c849-c8ce-c137-c2b958b4a9de","targetPort":"mounted"}],"ports":[{"name":"Is Open","type":"boolean","group":"State","plug":"output","index":0},{"name":"Open","type":{"name":"signal","allowConnectionsOnly":true},"group":"Actions","plug":"input","index":0},{"name":"Is Closed","type":"boolean","group":"State","plug":"output","index":1},{"name":"Close","type":{"name":"signal","allowConnectionsOnly":true},"group":"Actions","plug":"input","index":1}],"roots":["11c062cb-5ded-7e2c-20d4-9b5e08fad278"]},{"name":"/Sidebar/Navigation Menu","nodes":[{"id":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","type":"Group","parameters":{"sizeMode":"explicit","alignItems":"flex-start","backgroundColor":"#ADADAD"},"ports":[],"children":[{"id":"637b8ea0-a949-8437-4f3d-11f725b7d271","type":"For Each","parameters":{"template":"/Sidebar/Navigation Menu/Item"},"ports":[],"children":[]}]},{"id":"2027ce32-bde7-6515-f878-cf37e87f8604","type":"Component Inputs","parameters":{},"ports":[],"children":[]},{"id":"50f13c53-6411-77b4-6363-7c570a00d490","type":"JavaScriptFunction","parameters":{"scriptInputs":[{"id":"6slp","label":"Items"}],"intype-Items":"array","in-Items":"[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:\"home\",\n\n        // The label to be shown on the nav item\n        Label:\"Home\",\n\n        // The url to navigate to when clicked\n        Url:\"/home\",\n\n        // Setting this to true will indicate that this\n        // item should be selected if there is no path\n        // or if no other path matches\n        IsHome:true,\n    },\n    {\n        Icon:\"schedule\",\n        Label:\"Calendar\",\n        Url:\"/calendar\"\n    }\n]","functionScript":"Outputs.Items = Inputs.Items.map(i => ({\n    Label:i.Label,\n    Url:i.Url,\n    Icon:i.Icon,\n    // Set the \"selected\" item as the one with matching path name, or it it's an empty pathname\n    // the IsHome item\n    Selected:Inputs.CurrentPathName !== undefined && (Inputs.CurrentPathName === '/' && i.IsHome) || (Inputs.CurrentPathName !== '/' && i.Url.startsWith(Inputs.CurrentPathName))\n}))"},"ports":[{"name":"intype-Items","displayName":"Type","editorName":"Items | Type","plug":"input","type":{"name":"enum","enums":[{"value":"string","label":"String"},{"value":"boolean","label":"Boolean"},{"value":"number","label":"Number"},{"value":"object","label":"Object"},{"value":"date","label":"Date"},{"value":"array","label":"Array"},{"value":"color","label":"Color"}],"allowEditOnly":true},"default":"string","parent":"scriptInputs","parentItemId":"6slp","index":4},{"name":"in-Items","displayName":"Items","plug":"input","type":"array","group":"Inputs","index":5},{"name":"in-CurrentPathName","displayName":"CurrentPathName","plug":"input","type":"*","group":"Inputs","index":6},{"name":"out-Items","displayName":"Items","plug":"output","type":"*","group":"Outputs","index":7}],"children":[]},{"id":"71be4f86-5c8d-a300-79c9-9329bc6f1ec9","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"cf4dbe1d-7cb8-e775-7f0e-dca97939e734","type":"JavaScriptFunction","parameters":{"functionScript":"const onUrlChange = () => {\n    // Send the current pathname as an output\n    Outputs.PathName = document.location.pathname\n}\n\n// Detect a change of the pathname\nif (window.history && window.history.pushState) {\n    window.addEventListener('popstate', onUrlChange)\n} else {\n    window.addEventListener('hashchange', onUrlChange)\n}\n\nonUrlChange()"},"ports":[{"name":"out-PathName","displayName":"PathName","plug":"output","type":"*","group":"Outputs","index":4}],"children":[]},{"id":"c0619675-614a-11f8-3bb3-f215c0761262","type":"PageStackNavigateToPath","parameters":{},"ports":[],"children":[]},{"id":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","type":"Component Inputs","parameters":{},"ports":[],"children":[]}],"connections":[{"sourceId":"50f13c53-6411-77b4-6363-7c570a00d490","sourcePort":"out-Items","targetId":"637b8ea0-a949-8437-4f3d-11f725b7d271","targetPort":"items"},{"sourceId":"2027ce32-bde7-6515-f878-cf37e87f8604","sourcePort":"Items","targetId":"50f13c53-6411-77b4-6363-7c570a00d490","targetPort":"in-Items"},{"sourceId":"637b8ea0-a949-8437-4f3d-11f725b7d271","sourcePort":"itemOutputSignal-Click","targetId":"71be4f86-5c8d-a300-79c9-9329bc6f1ec9","targetPort":"Click"},{"sourceId":"637b8ea0-a949-8437-4f3d-11f725b7d271","sourcePort":"itemOutput-Url","targetId":"71be4f86-5c8d-a300-79c9-9329bc6f1ec9","targetPort":"Url"},{"sourceId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","sourcePort":"didMount","targetId":"cf4dbe1d-7cb8-e775-7f0e-dca97939e734","targetPort":"run"},{"sourceId":"cf4dbe1d-7cb8-e775-7f0e-dca97939e734","sourcePort":"out-PathName","targetId":"50f13c53-6411-77b4-6363-7c570a00d490","targetPort":"in-CurrentPathName"},{"sourceId":"637b8ea0-a949-8437-4f3d-11f725b7d271","sourcePort":"itemOutputSignal-Click","targetId":"c0619675-614a-11f8-3bb3-f215c0761262","targetPort":"navigate"},{"sourceId":"637b8ea0-a949-8437-4f3d-11f725b7d271","sourcePort":"itemOutput-Url","targetId":"c0619675-614a-11f8-3bb3-f215c0761262","targetPort":"path"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Magin Top","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"marginTop"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Margin Bottom","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"marginBottom"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Margin Left","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"marginLeft"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Margin Right","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"marginRight"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Align X","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"alignX"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Align Y","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"alignY"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Position","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"position"},{"sourceId":"4878090f-e7e9-4a4a-323d-c08e3f2fa404","sourcePort":"Layout","targetId":"ca4047c5-f345-11a3-f6b3-d3d603edc48c","targetPort":"flexDirection"}],"ports":[{"name":"Click","type":"signal","group":"Events","plug":"output","index":0},{"name":"Items","type":"array","default":"[\n    {\n        // Icons are references to material icons, \n        // see https://fonts.google.com/icons?selected=Material+Icons\n        Icon:\"home\",\n\n        // The label to be shown on the nav item\n        Label:\"Home\",\n\n        // The url to navigate to when clicked\n        Url:\"/home\",\n\n        // Setting this to true will indicate that this\n        // item should be selected if there is no path\n        // or if no other path matches\n        IsHome:true,\n    },\n    {\n        Icon:\"schedule\",\n        Label:\"Calendar\",\n        Url:\"/calendar\"\n    }\n]","group":"General","plug":"input","index":0},{"name":"Magin Top","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-top"},"group":"Margins","plug":"input","index":0},{"name":"Url","type":{"name":"*","allowConnectionsOnly":true},"group":"Events","plug":"output","index":1},{"name":"Margin Bottom","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-bottom"},"group":"Margins","plug":"input","index":1},{"name":"Margin Left","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-left"},"group":"Margins","plug":"input","index":2},{"name":"Margin Right","type":{"name":"number","units":["px","%"],"defaultUnit":"px","marginPaddingComp":"margin-right"},"group":"Margins","plug":"input","index":3},{"name":"Align X","type":{"name":"enum","enums":[{"label":"Left","value":"left"},{"label":"Center","value":"center"},{"label":"Right","value":"right"}],"alignComp":"horizontal"},"group":"Alignment","plug":"input","index":4},{"name":"Align Y","type":{"name":"enum","enums":[{"label":"Top","value":"top"},{"label":"Center","value":"center"},{"label":"Bottom","value":"bottom"}],"alignComp":"vertical"},"group":"Alignment","plug":"input","index":5},{"name":"Position","type":{"name":"enum","enums":[{"label":"In Layout","value":"relative"},{"label":"Absolute","value":"absolute"},{"label":"Sticky","value":"sticky"},{"label":"Fixed","value":"fixed"}]},"default":"relative","group":"Layout","plug":"input","index":6},{"name":"Layout","type":{"name":"enum","enums":[{"label":"None","value":"none"},{"label":"Vertical","value":"column"},{"label":"Horizontal","value":"row"}]},"default":"column","group":"Layout","plug":"input","index":7}],"roots":["ca4047c5-f345-11a3-f6b3-d3d603edc48c"],"metadata":{"canvasPos":{"x":1119,"y":0}}},{"name":"/Sidebar/Navigation Menu/Item","nodes":[{"id":"3b14875c-ef4f-e6c3-addf-956ab018d1b7","type":"Model2","parameters":{"idSource":"foreach","properties":"Icon,Label,Url,Selected"},"ports":[],"children":[]},{"id":"74a3c97a-7d78-46ec-d765-409f0f55cc61","type":"JavaScriptFunction","parameters":{"functionScript":"Outputs.IconSource = {\n    \"class\": \"material-icons\",\n    \"code\": Inputs.IconCode\n}\nOutputs.HaveIcon = Inputs.IconCode !== undefined && Inputs.IconCode !== \"\""},"ports":[{"name":"in-IconCode","displayName":"IconCode","plug":"input","type":"*","group":"Inputs","index":4},{"name":"out-IconSource","displayName":"IconSource","plug":"output","type":"*","group":"Outputs","index":5},{"name":"out-HaveIcon","displayName":"HaveIcon","plug":"output","type":"*","group":"Outputs","index":6}],"children":[]},{"id":"5816f42a-f8bf-0304-5014-94196ddc2a63","type":"Component Outputs","parameters":{},"ports":[],"children":[]},{"id":"02234225-73ae-c17b-7920-993cdaa51634","type":"States","parameters":{"states":"selected,not selected","values":"color","type-color":"color","value-selected-color":"Primary","value-not selected-color":"Grey - 700","currentState":"not selected"},"ports":[],"children":[]},{"id":"fca8f471-3ed6-495c-123e-fe4ae79e8f0e","type":"Condition","parameters":{},"ports":[],"children":[]},{"id":"dc846f2f-cff7-3ac2-59e0-6f2a94566ece","type":"Group","parameters":{"sizeMode":"explicit","flexDirection":"row","alignItems":"center","styleCss":"cursor:pointer;","height":{"value":56,"unit":"px"},"paddingLeft":{"value":0,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"marginRight":{"value":0,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Grey - 300"}},"ports":[],"children":[{"id":"aa62dd9e-0a5d-6123-cfd9-744a38844c5b","type":"Group","parameters":{"width":{"value":56,"unit":"px"},"height":{"value":56,"unit":"px"},"alignItems":"center","justifyContent":"center"},"ports":[],"children":[{"id":"e5ee96f4-1ea2-5c7d-a2b0-1c3a53a93eb1","type":"net.noodl.visual.icon","parameters":{"iconIconSource":{"class":"material-icons","code":"account_circle"},"iconColor":"Grey - 900","iconSize":{"value":24,"unit":"px"}},"ports":[],"children":[]}]},{"id":"184e8f69-ee4f-6dd3-21fe-7d80ebad866d","type":"Text","parameters":{"sizeMode":"contentSize","color":"Grey - 900"},"ports":[],"children":[]}]}],"connections":[{"sourceId":"3b14875c-ef4f-e6c3-addf-956ab018d1b7","sourcePort":"prop-Icon","targetId":"74a3c97a-7d78-46ec-d765-409f0f55cc61","targetPort":"in-IconCode"},{"sourceId":"3b14875c-ef4f-e6c3-addf-956ab018d1b7","sourcePort":"prop-Url","targetId":"5816f42a-f8bf-0304-5014-94196ddc2a63","targetPort":"Url"},{"sourceId":"3b14875c-ef4f-e6c3-addf-956ab018d1b7","sourcePort":"prop-Selected","targetId":"fca8f471-3ed6-495c-123e-fe4ae79e8f0e","targetPort":"condition"},{"sourceId":"fca8f471-3ed6-495c-123e-fe4ae79e8f0e","sourcePort":"ontrue","targetId":"02234225-73ae-c17b-7920-993cdaa51634","targetPort":"to-selected"},{"sourceId":"fca8f471-3ed6-495c-123e-fe4ae79e8f0e","sourcePort":"onfalse","targetId":"02234225-73ae-c17b-7920-993cdaa51634","targetPort":"to-not selected"},{"sourceId":"dc846f2f-cff7-3ac2-59e0-6f2a94566ece","sourcePort":"onClick","targetId":"5816f42a-f8bf-0304-5014-94196ddc2a63","targetPort":"Click"},{"sourceId":"74a3c97a-7d78-46ec-d765-409f0f55cc61","sourcePort":"out-IconSource","targetId":"e5ee96f4-1ea2-5c7d-a2b0-1c3a53a93eb1","targetPort":"iconIconSource"},{"sourceId":"74a3c97a-7d78-46ec-d765-409f0f55cc61","sourcePort":"out-HaveIcon","targetId":"e5ee96f4-1ea2-5c7d-a2b0-1c3a53a93eb1","targetPort":"mounted"},{"sourceId":"02234225-73ae-c17b-7920-993cdaa51634","sourcePort":"color","targetId":"e5ee96f4-1ea2-5c7d-a2b0-1c3a53a93eb1","targetPort":"iconColor"},{"sourceId":"02234225-73ae-c17b-7920-993cdaa51634","sourcePort":"color","targetId":"184e8f69-ee4f-6dd3-21fe-7d80ebad866d","targetPort":"color"},{"sourceId":"3b14875c-ef4f-e6c3-addf-956ab018d1b7","sourcePort":"prop-Label","targetId":"184e8f69-ee4f-6dd3-21fe-7d80ebad866d","targetPort":"text"}],"ports":[{"name":"Click","type":"signal","plug":"output","index":1},{"name":"Url","type":{"name":"*","allowConnectionsOnly":true},"plug":"output","index":2}],"roots":["dc846f2f-cff7-3ac2-59e0-6f2a94566ece"],"metadata":{"canvasPos":{"x":1574,"y":0}}}],"componentIndex":{"b1-0d79a9cdff59e841":{"components":["/Home"],"dependencies":[]},"b2-5e4dd2cfa4a9a976":{"components":["/Settings"],"dependencies":[]},"b3-3916606cd833e3ef":{"components":["/Profile"],"dependencies":[]}},"routerIndex":{"routers":[{"name":"Main","pages":{"routes":["/Home","/Settings","/Profile"],"startPage":"/Home"},"backgroundColor":"#606060"}],"pages":[{"path":"home","title":"Home","component":"/Home"},{"path":"profile","title":"Profile","component":"/Profile"},{"path":"settings","title":"Settings","component":"/Settings"}]},"rootComponent":"/App","rootNode":"246f9453-a119-ac78-171e-3806cf596ecc","metadata":{"styles":{"text":{"Display":{"letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none","fontSize":{"value":"40","unit":"px"},"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","color":"#000000"},"Headline":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"32","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Large":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"24","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120%","unit":"px"},"textTransform":"none"},"Title Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Title Small":{"fontFamily":"fonts/Roboto/Roboto-Bold.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Large":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Medium":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Label Small":{"fontFamily":"fonts/Roboto/Roboto-Medium.ttf","fontSize":{"value":"12","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"120","unit":"%"},"textTransform":"none"},"Body Large":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"20","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Medium":{"fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"16","unit":"px"},"color":"#000000","letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none"},"Body Small":{"letterSpacing":"Auto","lineHeight":{"value":"150","unit":"%"},"textTransform":"none","fontFamily":"fonts/Roboto/Roboto-Regular.ttf","fontSize":{"value":"14","unit":"px"},"color":"#000000"}},"colors":{"Grey - 300":"#E9E9E9","Grey - 900":"#1F1F1F","Primary":"#5836F5","Primary Dark":"#3F22B8","Primary Subtle":"#C9BFFC","Primary Light":"#F7F5FF","Grey - 800":"#383838","Grey - 700":"#4C4C4C","Grey - 600":"#757575","Grey - 500":"#A5A5A5","Grey - 400":"#CECECE","Grey - 200":"#F4F4F4","Grey - 100":"#FBFBFB","Success":"#49AD7F","Notice":"#F2C441","Danger":"#F75A4F","White":"#FFFFFF","Black":"#000000"}}},"variants":[{"typename":"net.noodl.controls.button","parameters":{"height":{"value":40,"unit":"px"},"sizeMode":"contentWidth","backgroundColor":"Primary","iconIconSource":{"class":"material-icons","code":"home"},"iconSpacing":{"value":8,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"textStyle":"Label Medium","paddingTop":{"value":0,"unit":"px"},"paddingLeft":{"value":24,"unit":"px"},"paddingRight":{"value":24,"unit":"px"},"paddingBottom":{"value":0,"unit":"px"},"color":"#FFFFFF","fontFamily":"fonts/Roboto/Roboto-Medium.ttf","minWidth":{"value":80,"unit":"px"},"useIcon":false,"iconSize":{"value":20,"unit":"px"}},"stateParameters":{"hover":{"backgroundColor":"Primary Dark"},"pressed":{"backgroundColor":"Primary","color":"White"},"disabled":{"backgroundColor":"Grey - 300","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.radiobutton","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Large","borderWidth":{"value":1,"unit":"px"},"value":"0","useIcon":false,"fillColor":"transparent","borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"marginBottom":{"value":8,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"fillColor":"Primary","borderColor":"Primary","borderWidth":{"value":1,"unit":"px"},"backgroundColor":"transparent","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"fillSpacing":{"value":2,"unit":"px"}},"hover":{"backgroundColor":"transparent","borderColor":"Grey - 700","width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"}},"disabled":{"borderColor":"Grey - 500","labelcolor":"Grey - 500","fillColor":"transparent"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"Text","parameters":{"textStyle":"Body Medium"},"stateParameters":{},"stateTransitions":{}},{"typename":"net.noodl.controls.range","parameters":{"thumbColor":"Primary","thumbBorderRadius":{"value":100,"unit":"%"},"trackHeight":{"value":4,"unit":"px"},"trackActiveColor":"Primary","trackColor":"Primary Subtle","width":{"value":100,"unit":"%"},"trackBorderRadius":{"value":100,"unit":"px"},"thumbHeight":{"value":16,"unit":"px"},"thumbWidth":{"value":16,"unit":"px"}},"stateParameters":{"hover":{"thumbColor":"Primary Dark","trackActiveColor":"Primary Dark"},"disabled":{"trackActiveColor":"Grey - 500","trackColor":"Grey - 300","thumbColor":"Grey - 500"}},"stateTransitions":{}},{"typename":"net.noodl.controls.checkbox","parameters":{"width":{"value":20,"unit":"px"},"height":{"value":20,"unit":"px"},"useIcon":false,"borderWidth":{"value":1,"unit":"px"},"useLabel":true,"labeltextStyle":"Body Medium","borderRadius":{"value":2,"unit":"px"},"borderColor":"Grey - 700","labelfontSize":{"value":16,"unit":"px"},"labelcolor":"Grey - 900","labelSpacing":{"value":12,"unit":"px"}},"stateParameters":{"checked":{"useIcon":true,"iconIconSource":{"class":"material-icons","code":"check"},"backgroundColor":"Primary","borderColor":"Primary","iconSize":{"value":16,"unit":"px"}},"disabled":{"opacity":0.5},"hover":{"borderColor":"Grey - 700"},"pressed":{}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":300,"delay":0},"checked":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.textinput","parameters":{"useLabel":true,"sizeMode":"explicit","height":{"value":40,"unit":"px"},"textStyle":"Body Medium","borderStyle":"solid","borderRadius":{"value":4,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 700","labeltextStyle":"Label Small","paddingLeft":{"value":12,"unit":"px"},"paddingRight":{"value":8,"unit":"px"},"labelSpacing":{"value":4,"unit":"px"},"placeholder":"Type here","color":"Grey - 900","placeHolderOpacity":0.65,"enabled":true,"blockTouch":false,"useIcon":false,"iconIconSource":{"class":"material-icons","code":"home"},"iconSize":{"value":20,"unit":"px"},"iconSpacing":{"value":4,"unit":"px"},"iconColor":"Grey - 700","labelcolor":"Grey - 700"},"stateParameters":{"hover":{"labelcolor":"Grey - 700","borderColor":"Grey - 700","borderStyle":"solid","color":"Grey - 900"},"focused":{"borderColor":"Primary","labelcolor":"Primary","borderWidth":{"value":1,"unit":"px"},"boxShadowEnabled":false,"boxShadowColor":"Primary","borderStyle":"solid"},"disabled":{"labelcolor":"Grey - 500","backgroundColor":"Grey - 200","borderWidth":{"value":1,"unit":"px"},"borderColor":"Grey - 500","color":"Grey - 600"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"disabled":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}},{"typename":"net.noodl.controls.options","parameters":{"sizeMode":"explicit","height":{"value":40,"unit":"px"},"borderWidth":{"value":1,"unit":"px"},"borderRadius":{"value":4,"unit":"px"},"borderColor":"Grey - 700","boxShadowColor":"Dark Gray","useIcon":true,"iconIconSource":{"class":"material-icons","code":"expand_more"},"iconPlacement":"right","iconSize":{"value":20,"unit":"px"},"paddingRight":{"value":12,"unit":"px"},"textStyle":"Body Medium","paddingLeft":{"value":12,"unit":"px"},"marginTop":{"value":0,"unit":"px"},"width":{"value":100,"unit":"%"},"iconColor":"Grey - 700","placeholderOpacity":0.65,"placeholder":"Select option","useLabel":true,"labelSpacing":{"value":4,"unit":"px"},"labeltextStyle":"Label Small","labelcolor":"Grey - 700","items":"[\n    {\"Label\":\"Option 1\", \"Value\":\"1\"},\n    {\"Label\":\"Option 2\", \"Value\":\"2\"},\n    {\"Label\":\"Option 3\", \"Value\":\"3\"}\n]"},"stateParameters":{"hover":{"borderColor":"Grey - 700","borderRadius":{"value":4,"unit":"px"},"iconColor":"Grey - 900","iconSize":{"value":20,"unit":"px"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Grey - 700"},"focused":{"borderColor":"Primary","boxShadowColor":"Primary","borderRadius":{"value":4,"unit":"px"},"useIcon":true,"iconColor":"Primary","iconIconSource":{"class":"material-icons","code":"keyboard_arrow_up"},"iconPlacement":"right","color":"Grey - 900","labelcolor":"Primary"},"pressed":{"borderRadius":{"value":4,"unit":"px"}},"disabled":{"labelcolor":"Grey - 500","iconColor":"Grey - 500","borderColor":"Grey - 500","color":"Grey - 600","backgroundColor":"Grey - 200"}},"stateTransitions":{},"defaultStateTransitions":{"neutral":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"focused":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"hover":{"curve":[0,0,0.58,1],"dur":0,"delay":0},"pressed":{"curve":[0,0,0.58,1],"dur":0,"delay":0}}}]};
