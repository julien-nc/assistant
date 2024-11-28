OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "Theip ar an eolas nuair a bhí sé réidh; úsáideoir anaithnid",
    "User not logged in" : "Níl an t-úsáideoir logáilte isteach",
    "User not found" : "Úsáideoir gan aimsiú",
    "Failed to create a chat session" : "Theip ar sheisiún comhrá a chruthú",
    "Failed to update the chat session" : "Theip ar an seisiún comhrá a nuashonrú",
    "Failed to delete the chat session" : "Theip ar an seisiún comhrá a scriosadh",
    "Failed to get chat sessions" : "Theip ar na seisiúin chomhrá a fháil",
    "Session not found" : "Níor aimsíodh an seisiún",
    "Message content is empty" : "Tá ábhar na teachtaireachta folamh",
    "Failed to add a chat message" : "Theip ar theachtaireacht chomhrá a chur leis",
    "Failed to get chat messages" : "Theip ar teachtaireachtaí comhrá a fháil",
    "Failed to delete a chat message" : "Theip ar theachtaireacht chomhrá a scriosadh",
    "Failed to delete the last message" : "Theip ar an teachtaireacht dheireanach a scriosadh",
    "Failed to add a chat message into DB" : "Theip ar theachtaireacht chomhrá a chur le DB",
    "Failed to generate a title for the chat session" : "Theip ar theideal a ghiniúint don seisiún comhrá",
    "Nextcloud Assistant" : "Cúntóir Nextcloud",
    "Assistant task" : "Cúntóir tasc",
    "AI text generation" : "Giniúint téacs AI",
    "AI image generation" : "Giniúint íomhá AI",
    "AI audio transcription" : "Trascríobh fuaime AI",
    "AI context writer" : "Scríbhneoir comhthéacs AI",
    "Writing style: %1$s; Source material: %2$s" : "Stíl scríofa: %1$s; Bunábhar: %2$s",
    "Task for \"%1$s\" has finished" : "Tá an tasc le haghaidh \"%1$s\" críochnaithe",
    "\"%1$s\" task for \"%2$s\" has finished" : "Tá tasc \"%1$s\" le haghaidh \"%2$s\" críochnaithe",
    "Input: %1$s" : "Ionchur: %1$s",
    "Result: %1$s" : "Toradh: %1$s",
    "View results" : "Féach ar na torthaí",
    "Task for \"%1$s\" has failed" : "Theip ar an tasc le haghaidh \"%1$s\".",
    "\"%1$s\" task for \"%2$s\" has failed" : "Theip ar \"%1$s\" tasc le haghaidh \"%2$s\".",
    "View task" : "Féach ar an tasc",
    "Generate text" : "Gin téacs",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Cuir iarratas chuig an gCúntóir, mar shampla: scríobh an chéad dréacht de chur i láthair, tabhair moltaí dom le haghaidh cur i láthair, scríobh dréachtfhreagra chuig mo chomhghleacaí.",
    "Chat with AI" : "Comhrá a dhéanamh le AI",
    "Chat with an AI model." : "Chat with an AI model.",
    "Artificial Intelligence" : "Intleacht Shaorga",
    "Process and transform text" : "Téacs a phróiseáil agus a athrú",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "Tugann an aip seo comhéadan úsáideora chun an ghné próiseála téacs Nextcloud a úsáid.\n\nLigeann sé d’úsáideoirí tascanna AI a sheoladh, a chur ar an eolas nuair a chríochnaíonn siad agus na torthaí a fheiceáil.\nTá an cúntóir le feiceáil freisin in aipeanna eile cosúil le Téacs chun codanna de dhoiciméad a phróiseáil go héasca.\n\nTuilleadh sonraí ar an API OCS cúnta agus féidearthachtaí comhtháthú frontend sa\n[doc forbróir]( https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Conas é a úsáid\n\nFeictear iontráil nua ar an roghchlár ceanntásc ar dheis. Nuair a chliceáiltear é, taispeántar an cúntóir agus is féidir leat a roghnú agus cineál tasc agus\nsocraigh an t-ionchur is mian leat a phróiseáil.\n\nD’fhéadfadh go rithfidh an tasc láithreach nó go ndéanfaí é a sceidealú ag brath ar an meastachán ama a thugann an soláthraí AI.\nNuair a bheidh tasc sceidealta, rithfidh sé mar phost cúlra. Nuair a bheidh sé críochnaithe, gheobhaidh tú fógra\nónar féidir na torthaí a thaispeáint.\n\nIs féidir le apps eile a chomhtháthú leis an gcúntóir. Mar shampla, taispeánfaidh Téacs cnaipe inlíne seachas gach alt\nchun cineál taisc a roghnú go díreach chun an mhír seo a phróiseáil. Má roghnaítear tasc ar an mbealach seo, osclófar an cúntóir leis an tasc\ná réamhroghnú agus an téacs ionchuir socraithe.\n\nTuilleadh sonraí agus screenshots sa [doic úsáideora](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Gnéithe\n\nSa chúntóir, braitheann liosta na dtascanna atá ar fáil ar na soláthraithe atá ar fáil suiteáilte trí apps eile.\nCiallaíonn sé seo go bhfuil saoirse iomlán agat maidir leis na seirbhísí/bogearraí a reáchtálfaidh do thascanna AI.\n\n### Soláthraithe próiseála téacs\n\nGo dtí seo, an [Múnla Mórtheanga Áitiúil]( https://github.com/nextcloud/llm2#readme)\nagus an [comhtháthú OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai) apps\nsoláthraithe próiseála téacs a áireamh chun:\n* Achoimre\n* Ábhair Sliocht\n* Gin ceannlíne\n* Faigh freagra ó leid saor in aisce\n* Athfhoirmliú (OpenAi/LocalAi amháin)\n* Scríbhneoir comhthéacs: Gin téacs le stíl shonraithe. Is féidir cur síos a dhéanamh ar an stíl nó é a sholáthar trí théacs samplach.\n\n### Téacs go híomhá (Giniúint íomhá)\n\nSoláthraithe aitheanta:\n* [comhtháthú OpenAi/LocalAI]( https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Cobhsaí Idirleathadh]( https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Óráid go téacs (Tras-scríobh fuaime)\n\nSoláthraithe aitheanta:\n* [comhtháthú OpenAi/LocalAI]( https://apps.nextcloud.com/apps/integration_openai)\n* [Óráid Cogar Áitiúil-go-Téacs](https://apps.nextcloud.com/apps/stt_whisper)\n\nTuilleadh sonraí ar conas é seo a shocrú sna [doiciméid admin](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "Faigh tuilleadh sonraí ar conas Cúntóir a shocrú agus cúlanna molta sna doiciméid Riaracháin.",
    "Select which features you want to enable" : "Roghnaigh na gnéithe is mian leat a chumasú",
    "Top-right assistant" : "Cúntóir barr-dheis",
    "To be able to use this feature, please install at least one AI text processing provider." : "Chun an ghné seo a úsáid, suiteáil soláthraí próiseála téacs AI amháin ar a laghad le do thoil.",
    "AI text generation smart picker" : "Roghnóir cliste giniúna téacs AI",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "Chun an ghné seo a chumasú, suiteáil soláthraí próiseála téacs AI don chineál tasc pras saor in aisce:",
    "Text-to-image smart picker" : "Roghnóir cliste téacs-go-íomhá",
    "To enable this feature, please install a text-to-image provider:" : "Chun an ghné seo a chumasú, suiteáil soláthraí téacs-go-íomhá:",
    "Speech-to-text smart picker" : "Roghnóir cliste urlabhra go téacs",
    "To enable this feature, please install a speech-to-text provider:" : "Chun an ghné seo a chumasú, suiteáil soláthraí urlabhra go téacs:",
    "Chat User Instructions for Chat Completions" : "Treoracha Úsáideora Comhrá maidir le Críochnú Comhrá",
    "It is passed on to the LLM for it to better understand the context." : "Cuirtear ar aghaidh chuig an LLM é le go mbeidh tuiscint níos fearr aige ar an gcomhthéacs.",
    "\"{user}\" is a placeholder for the user's display name." : "Is sealbhóir áite é \"{user}\" le haghaidh ainm taispeána an úsáideora.",
    "Chat User Instructions for Title Generation" : "Comhrá Treoracha Úsáideora maidir le Giniúint Teidil",
    "It is passed on to the LLMs to let it know what to do" : "Cuirtear ar aghaidh chuig na LLManna é chun a chur in iúl dóibh cad atá le déanamh",
    "\"{user}\" is a placeholder for the user's display name here as well." : "Is sealbhóir áite é \"{user}\" d'ainm taispeána an úsáideora anseo freisin.",
    "Last N messages to consider for chat completions" : "N teachtaireacht dheireanach le breithniú maidir le críochnú comhrá",
    "This includes the user instructions and the LLM's messages" : "Áirítear leis seo na treoracha úsáideora agus teachtaireachtaí LLM",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Líon na dteachtaireachtaí le breithniú maidir le críochnú comhrá (gan na treoracha úsáideora a áireamh, a chuirtear san áireamh i gcónaí)",
    "Assistant admin options saved" : "Sábháladh roghanna riaracháin Assistant",
    "Failed to save assistant admin options" : "Theip ar shábháil roghanna riaracháin an chúntóra",
    "The task ran successfully but the result is identical to the input." : "D'éirigh go maith leis an tasc ach tá an toradh comhionann leis an ionchur.",
    "This output was generated by AI. Make sure to double-check and adjust." : "Ba é AI a ghin an t-aschur seo. Bí cinnte a sheiceáil faoi dhó agus a choigeartú.",
    "Back to the assistant" : "Ar ais go dtí an cúntóir",
    "Previous \"{taskTypeName}\" tasks" : "Tascanna \"{taskTypeName}\" roimhe seo",
    "Show previous tasks" : "Taispeáin tascanna roimhe seo",
    "Hide advanced options" : "Folaigh roghanna casta",
    "Show advanced options" : "Taispeáin roghanna casta",
    "Try again" : "Déan iarracht arís",
    "Send request" : "Iarratas a sheoladh",
    "Launch this task again" : "Seoladh an tasc seo arís",
    "Launch a task" : "Seoladh tasc",
    "Generate a first draft for a blog post about privacy" : "Gin an chéad dréacht do bhlagphost faoi phríobháideacht",
    "What is the venue for the team retreat this quarter?" : "Cén t-ionad a bheidh ag cúlú na foirne an ceathrú cuid?",
    "Type or paste the text to summarize" : "Clóscríobh nó greamaigh an téacs chun achoimre a dhéanamh",
    "Type or paste the text to generate a headline for" : "Clóscríobh nó greamaigh an téacs chun ceannlíne a chruthú do",
    "Type or paste the text to extract the topics from" : "Clóscríobh nó greamaigh an téacs chun na hábhair a bhaint as",
    "landscape trees forest peaceful" : "Crainn tírdhreacha foraoise síochánta",
    "a number" : "uimhir",
    "Shakespeare or an example of the style" : "Shakespeare nó sampla den stíl",
    "A description of what you need or some original content" : "Cur síos ar a bhfuil uait nó ar bhunábhar éigin",
    "Close" : "Dún",
    "Close Nextcloud Assistant" : "Dún Nextcloud Assistant",
    "New conversation" : "Comhrá nua",
    "Loading conversations…" : "Comhráite á lódáil…",
    "No conversations yet" : "Níl aon chomhrá fós",
    "Delete" : "Scrios",
    "Conversation title" : "Teideal an chomhrá",
    "Edit title" : "Cuir teideal in eagar",
    "Generate title" : "Gin teideal",
    "Creating a new conversation" : "Comhrá nua á chruthú",
    "Hello there! What can I help you with today?" : "Dia duit ann! Cad is féidir liom cabhrú leat inniu?",
    "Try sending a message to spark a conversation." : "Bain triail as teachtaireacht a sheoladh chun tús a chur le comhrá.",
    "Load older messages" : "Íosluchtaigh teachtaireachtaí níos sine",
    "Retry response generation" : "Bain triail eile as giniúint freagartha",
    "Error generating a response" : "Earráid agus freagra á ghiniúint",
    "Error getting the generated title for the conversation" : "Earráid agus an teideal ginte á fháil don chomhrá",
    "Error checking if the session is thinking" : "Earráid ag seiceáil an bhfuil an seisiún ag smaoineamh",
    "Error updating title of conversation" : "Earráid agus teideal an chomhrá á nuashonrú",
    "Untitled conversation" : "Comhrá gan teideal",
    "Error generating a title for the conversation" : "Earráid agus teideal á ghiniúint don chomhrá",
    "Error deleting conversation" : "Tharla earráid agus an comhrá á scriosadh",
    "Error fetching conversations" : "Tharla earráid agus na comhráite á bhfáil",
    "Error deleting message" : "Earráid agus an teachtaireacht á scriosadh",
    "Error fetching messages" : "Earráid agus teachtaireachtaí á bhfáil",
    "Error creating a new message" : "Earráid agus teachtaireacht nua á cruthú",
    "Invalid response received for a new conversation request" : "Freagra neamhbhailí faighte ar iarratas comhrá nua",
    "Error creating a new conversation" : "Earráid agus comhrá nua á chruthú",
    "Error regenerating a response" : "Earráid agus freagra á athghiniúint",
    "Error loading messages" : "Earráid agus teachtaireachtaí á lódáil",
    "Loading messages…" : "Teachtaireachtaí á lódáil…",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "Caithfidh an téacs a bheith níos giorra ná nó cothrom le {maxLength} carachtair, {length} faoi láthair",
    "Cancel editing" : "Cealaigh eagarthóireacht",
    "Submit" : "Cuir isteach",
    "Type a message…" : "Clóscríobh teachtaireacht…",
    "Processing…" : "Ag próiseáil…",
    "You" : "tú",
    "Message copied to clipboard" : "Cóipeáladh an teachtaireacht chuig an ngearrthaisce",
    "Copy message" : "Cóipeáil teachtaireacht",
    "Regenerate message" : "Athghin teachtaireacht",
    "Delete message" : "Scrios teachtaireacht",
    "Selective context" : "Comhthéacs roghnach",
    "Select Files/Folders" : "Roghnaigh Comhaid/Fillteáin",
    "Select Providers" : "Roghnaigh Soláthraithe",
    "Choose Files/Folders" : "Roghnaigh Comhaid/Fillteáin",
    "Choose" : "Roghnaigh",
    "Clear Selection" : "Glan Roghnú",
    "Error fetching default provider key" : "Earráid agus eochair an tsoláthraí réamhshocraithe á fáil",
    "Error fetching providers" : "Earráid ag fáil soláthraithe",
    "No sources referenced" : "Níor thagairt aon fhoinse",
    "No provider found" : "Níor aimsíodh aon soláthraí",
    "AI Providers need to be installed to use the Assistant" : "Ní mór Soláthraithe AI ​​a shuiteáil chun an Cúntóir a úsáid",
    "tool" : "uirlis",
    "integration" : "comhtháthú",
    "complete AI documentation" : "doiciméadú AI iomlán",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "Is féidir aipeanna soláthraithe AI ​​a fháil sna rannáin socruithe aipe {toolLink} agus {integrationLink}.",
    "You can also check the {aiAdminDocLink}" : "Is féidir leat an {aiAdminDocLink} a sheiceáil freisin",
    "AI image generation smart picker" : "Roghnóir cliste giniúna íomhá AI",
    "AI transcription smart picker" : "Roghnóir cliste tras-scríobh AI",
    "No suitable providers are available. They must first be enabled by your administrator." : "Níl soláthraithe oiriúnacha ar fáil. Caithfidh do riarthóir iad a chumasú ar dtús.",
    "Configured Backends" : "Innill Cumraithe",
    "The following services are used as backends for Nextcloud Assistant:" : "Úsáidtear na seirbhísí seo a leanas mar innill do Nextcloud Assistant:",
    "{providerName} for {taskName}" : "{providerName} le haghaidh {taskName}",
    "Assistant options saved" : "Sábháladh roghanna Assistant",
    "Failed to save assistant options" : "Theip ar shábháil roghanna cúntóir",
    "Getting results…" : "Torthaí á bhfáil…",
    "Run task in the background and get notified" : "Rith tasc sa chúlra agus a fháil ar an eolas",
    "Back to the Assistant" : "Ar ais go dtí an Cúntóir",
    "Cancel task" : "Cealaigh tasc",
    "You will receive a notification when it has finished" : "Gheobhaidh tú fógra nuair a bheidh sé críochnaithe",
    "Your task has been scheduled" : "Tá do thasc sceidealaithe",
    "Nothing yet" : "Ní dhéanfaidh aon ní go fóill",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Níl aon tasc \"{taskTypeName}\" curtha isteach agat fós",
    "Cancel" : "Cealaigh",
    "Succeeded" : "D'éirigh",
    "Cancelled" : "Ar ceal",
    "Failed" : "Theip",
    "Running" : "Ag rith",
    "Scheduled" : "Sceidealta",
    "Input" : "Ionchur",
    "Result" : "Toradh",
    "This task is scheduled" : "Tá an tasc seo sceidealta",
    "Unknown status" : "Stádas anaithnid",
    "_{n} image has been generated_::_{n} images have been generated_" : ["{n} íomhá ginte","{n} íomhánna ginte","{n} íomhánna ginte","{n} íomhánna ginte","{n} íomhánna ginte"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Tá giniúint íomhá {n} sceidealaithe","Tá giniúint {n} íomhá sceidealaithe","Tá giniúint {n} íomhá sceidealaithe","Tá giniúint {n} íomhá sceidealaithe","Tá giniúint {n} íomhá sceidealaithe"],
    "Start recording" : "Tosaigh taifeadadh",
    "Dismiss recording" : "Ruaig an taifeadadh",
    "End recording and send" : "Cuir deireadh leis an taifeadadh agus seol",
    "Error while recording audio" : "Earráid agus an fhuaim á taifeadadh",
    "Choose file" : "Roghnaigh comhad",
    "Choose a file" : "Roghnaigh comhad",
    "No file selected" : "Níor roghnaíodh aon chomhad",
    "Choose a value" : "Roghnaigh luach",
    "Upload from device" : "Íosluchtaigh ó gléas",
    "Select from Nextcloud" : "Roghnaigh ó Nextcloud",
    "Pick one or multiple files" : "Roghnaigh comhad amháin nó níos mó",
    "Remove this media" : "Bain an meán seo",
    "Download this media" : "Íosluchtaigh meáin seo",
    "Share this media" : "Roinn na meáin seo",
    "Share" : "Comhroinn",
    "Could not upload the recorded file" : "Níorbh fhéidir an comhad taifeadta a uaslódáil",
    "Output file share link copied to clipboard" : "Nasc comhroinnte aschuir arna chóipeáil chuig an ngearrthaisce",
    "Could not copy to clipboard" : "Níorbh fhéidir cóip a dhéanamh chuig an ngearrthaisce",
    "Pick a file" : "Pioc comhad",
    "Clear value" : "Luach soiléir",
    "Type some number" : "Clóscríobh uimhir éigin",
    "The current value is not a number" : "Ní uimhir é an luach reatha",
    "Advanced" : "Casta",
    "Copy output" : "Cóipeáil an t-aschur",
    "Copy" : "Cóipeáil",
    "Choose a text file" : "Roghnaigh comhad téacs",
    "Unexpected response from text parser" : "Freagra gan choinne ó pharsálaí téacs",
    "Could not parse file" : "Níorbh fhéidir an comhad a pharsáil",
    "Result could not be copied to clipboard" : "Níorbh fhéidir an toradh a chóipeáil chuig an ngearrthaisce",
    "Upload file" : "Uaslódáil comhad",
    "Could not upload the file" : "Níorbh fhéidir an comhad a uaslódáil",
    "Could not upload the files" : "Níorbh fhéidir na comhaid a uaslódáil",
    "Your task with ID {id} has failed" : "Theip ar do thasc le haitheantas {id}",
    "Failed to schedule your task" : "Theip ar do thasc a sceidealú",
    "Submit the current task's result" : "Cuir isteach toradh an taisc reatha",
    "Assistant error" : "Earráid Assistant",
    "Please log in to view the task result" : "Logáil isteach le do thoil chun toradh an taisc a fheiceáil",
    "This task does not exist or has been cleaned up" : "Níl an tasc seo ann nó tá sé glanta suas",
    "Failed to schedule the task" : "Theip ar an tasc a sceidealú",
    "Failed to get the last message" : "Theip ar an teachtaireacht dheireanach a fháil",
    "Failed to process prompt; unknown user" : "Theip ar phróiseáil go pras; úsáideoir anaithnid",
    "Failed to get prompt history; unknown user" : "Theip ar an stair phras a fháil; úsáideoir anaithnid",
    "Failed to get outputs; unknown user" : "Theip ar aschuir a fháil; úsáideoir anaithnid",
    "Failed to cancel generation; unknown user" : "Theip ar ghiniúint a chur ar ceal; úsáideoir anaithnid",
    "Some internal error occurred. Contact your sysadmin for more info." : "Tharla roinnt earráid inmheánach. Déan teagmháil le do riarthóir sys chun tuilleadh eolais a fháil.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Níor aimsíodh aon soláthraí Urlabhra-go-Téacs, suiteáil ceann ón siopa aip chun an ghné seo a úsáid.",
    "Audio file not found." : "Níor aimsíodh an comhad fuaime.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Níl cead comhad taifeadta/eolaire a chruthú, déan teagmháil le do riarthóir córais chun an fhadhb seo a réiteach.",
    "Failed to set visibility of image files; unknown user" : "Theip ar infheictheacht na gcomhad íomhá a shocrú; úsáideoir anaithnid",
    "Unknown error while retrieving prompt history." : "Earráid anaithnid agus stair leid á aisghabháil.",
    "Context write" : "Comhthéacs scríobh",
    "Writes text in a given style based on the provided source material." : "Scríobhann sé téacs i stíl ar leith bunaithe ar an mbunábhar a cuireadh ar fáil.",
    "Transcribe" : "Trascríobh",
    "Transcribe audio to text" : "Trascríobh fuaime go téacs",
    "Generate image" : "Gin íomhá",
    "Generate an image from a text" : "Gin íomhá as téacs",
    "Canceled by user" : "Cealaithe ag an úsáideoir",
    "FreePromptTaskType not available" : "Níl FreePromptTaskType ar fáil",
    "Failed to run or schedule a task" : "Theip ar thasc a rith nó a sceidealú",
    "Failed to get prompt history" : "Theip ar an stair leid a fháil",
    "Generation not found" : "Giniúint gan aimsiú",
    "Multiple tasks found" : "Fuarthas tascanna iolracha",
    "Transcript not found" : "Níor aimsíodh an tras-scríbhinn",
    "No text to image processing provider available" : "Níl aon soláthraí próiseála téacs chuig íomhá ar fáil",
    "Image request error" : "Earráid iarratais íomhá",
    "Image generation not found." : "Giniúint íomhá gan aimsiú.",
    "Retrieving the image generation failed." : "Theip ar ghiniúint na híomhá a aisghabháil.",
    "Image generation failed." : "Theip ar ghiniúint íomhánna.",
    "Image file names could not be fetched from database" : "Níorbh fhéidir ainmneacha comhaid íomhá a fháil ón mbunachar sonraí",
    "Image file not found in database" : "Ní bhfuarthas an comhad íomhá sa bhunachar sonraí",
    "Image file not found" : "Níor aimsíodh an comhad íomhá",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Tugann an aip seo comhéadan úsáideora chun an ghné próiseála téacs Nextcloud a úsáid.\n\nLigeann sé d’úsáideoirí tascanna AI a sheoladh, a chur ar an eolas nuair a chríochnaíonn siad agus na torthaí a fheiceáil.\nTá an cúntóir le feiceáil freisin in aipeanna eile cosúil le Téacs chun codanna de dhoiciméad a phróiseáil go héasca.\n\nTuilleadh sonraí ar an API OCS cúnta agus féidearthachtaí comhtháthú frontend sa\n[doc forbróir]( https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Conas é a úsáid\n\nFeictear iontráil nua ar an roghchlár ceanntásc ar dheis. Nuair a chliceáiltear é, taispeántar an cúntóir agus is féidir leat a roghnú agus cineál tasc agus\nsocraigh an t-ionchur is mian leat a phróiseáil.\n\nD’fhéadfadh go rithfidh an tasc láithreach nó go ndéanfaí é a sceidealú ag brath ar an meastachán ama a thugann an soláthraí AI.\nNuair a bheidh tasc sceidealta, rithfidh sé mar phost cúlra. Nuair a bheidh sé críochnaithe, gheobhaidh tú fógra\nónar féidir na torthaí a thaispeáint.\n\nIs féidir le apps eile a chomhtháthú leis an gcúntóir. Mar shampla, taispeánfaidh Téacs cnaipe inlíne seachas gach alt\nchun cineál taisc a roghnú go díreach chun an mhír seo a phróiseáil. Má roghnaítear tasc ar an mbealach seo, osclófar an cúntóir leis an tasc\ná réamhroghnú agus an téacs ionchuir socraithe.\n\nTuilleadh sonraí agus screenshots sa [doic úsáideora](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Gnéithe\n\nSa chúntóir, braitheann liosta na dtascanna atá ar fáil ar na soláthraithe atá ar fáil suiteáilte trí apps eile.\nCiallaíonn sé seo go bhfuil saoirse iomlán agat maidir leis na seirbhísí/bogearraí a reáchtálfaidh do thascanna AI.\n\n### Soláthraithe próiseála téacs\n\nGo dtí seo, an [Múnla mór teanga]( https://github.com/nextcloud/llm#readme)\nagus an [comhtháthú OpenAi/LocalAI](https://apps.nextcloud.com/apps/integration_openai) apps\nsoláthraithe próiseála téacs a áireamh chun:\n* Achoimre\n* Ábhair Sliocht\n* Gin ceannlíne\n* Faigh freagra ó leid saor in aisce\n* Athfhoirmliú (OpenAi/LocalAi amháin)\n* Scríbhneoir comhthéacs: Gin téacs le stíl shonraithe. Is féidir cur síos a dhéanamh ar an stíl nó é a sholáthar trí théacs samplach.\n\n### Téacs go híomhá (Giniúint íomhá)\n\nSoláthraithe aitheanta:\n* [comhtháthú OpenAi/LocalAI]( https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Cobhsaí Idirleathadh]( https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Óráid go téacs (Tras-scríobh fuaime)\n\nSoláthraithe aitheanta:\n* [comhtháthú OpenAi/LocalAI]( https://apps.nextcloud.com/apps/integration_openai)\n* [Óráid Cogar Áitiúil-Chuig-Téacs](https://apps.nextcloud.com/apps/stt_whisper)",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Chun an ghné seo a chumasú, le do thoil suiteáil soláthraí próiseála téacs AI don chineál tasc pras saor in aisce.",
    "To enable this feature, please install a text-to-image provider." : "Chun an ghné seo a chumasú, suiteáil soláthraí téacs-go-íomhá le do thoil.",
    "To enable this feature, please install a speech-to-text provider." : "Chun an ghné seo a chumasú, suiteáil soláthraí urlabhra go téacs.",
    "Image storage" : "Stóráil íomhá",
    "Image generation idle time (days)" : "Am díomhaoin giniúna íomhá (laethanta)",
    "Days until generated images are deleted if they are not viewed" : "Laethanta go dtí go scriostar íomhánna ginte mura bhfeictear iad",
    " This includes the user instructions and the LLM's messages" : "Áirítear leis seo na treoracha úsáideora agus teachtaireachtaí LLM",
    "Writing style" : "Stíl scríbhneoireachta",
    "Describe the writing style you want to use or supply an example document." : "Déan cur síos ar an stíl scríbhneoireachta is mian leat a úsáid nó tabhair doiciméad samplach.",
    "Source material" : "Bunábhar",
    "Describe what you want the document to be written on." : "Déan cur síos ar cad ba mhaith leat go mbeadh an doiciméad scríofa air.",
    "Type some text" : "Clóscríobh roinnt téacs",
    "Output" : "Aschur",
    "Copy output text to clipboard" : "Cóipeáil an téacs aschuir chuig an ngearrthaisce",
    "Reset the output value to the originally generated one" : "Athshocraigh an luach aschuir go dtí an luach a gineadh ar dtús",
    "Reset" : "Athshocraigh",
    "Text Generation" : "Giniúint Téacs",
    "Audio transcription" : "Trascríobh fuaime",
    "Unknown Result Type" : "Cineál Torthaí Anaithnid",
    "The task ran successfully but the generated text is empty." : "Rith an tasc go rathúil ach tá an téacs ginte folamh.",
    "Run a task" : "Rith tasc",
    "Loading conversations..." : "Comhráite á lódáil…",
    "Edit Title" : "Cuir Teideal in Eagar",
    "Generate Title" : "Gin Teideal",
    "Loading messages..." : "Teachtaireachtaí á lódáil...",
    "Type a message..." : "Clóscríobh teachtaireacht...",
    "Thinking..." : "Ag smaoineamh...",
    "Text generation content" : "Ábhar giniúna téacs",
    "The text generation task was scheduled to run in the background." : "Bhí an tasc giniúna téacs sceidealta le rith sa chúlra.",
    "Estimated completion time: " : "Am críochnaithe measta:",
    "This can take a while…" : "Seans go dtógfaidh sé seo tamall…",
    "Some generations are still being processed in the background! Showing finished generations." : "Tá roinnt glúnta fós á bpróiseáil sa chúlra! Glúin chríochnaithe á léiriú.",
    "Loading generations…" : "Glúin á lódáil…",
    "Include prompt in the final result" : "Cuir leid san áireamh sa toradh deiridh",
    "Unexpected server response" : "Freagra freastalaí gan choinne",
    "The processing of generations failed." : "Theip ar phróiseáil na glúnta.",
    "The processing of some generations failed." : "Theip ar phróiseáil roinnt glúnta.",
    "Text generation error" : "Earráid giniúna téacs",
    "Unknown text generation API error" : "Earráid API giniúna téacs anaithnid",
    "Prompt" : "Leid",
    "Result {index}" : "Toradh {index}",
    "Run in the background" : "Rith sa chúlra",
    "Record Audio" : "Taifead Fuaime",
    "Choose Audio File" : "Roghnaigh Comhad Fuaime",
    "Reset recorded audio" : "Athshocraigh an fhuaim thaifeadta",
    "Stop recording" : "Stop taifeadadh",
    "No audio file selected" : "Níl aon chomhad fuaime roghnaithe",
    "Selected Audio File:" : "Comhad Fuaime Roghnaithe:",
    "Choose audio file in your storage" : "Roghnaigh comhad fuaime i do stór",
    "Choose audio File" : "Roghnaigh Comhad Fuaime",
    "Copy result" : "Cóipeáil an toradh",
    "Audio input" : "Ionchur fuaime",
    "Unknown input" : "Ionchur anaithnid",
    "Running…" : "Ag rith…",
    "Unknown error" : "Earráid anaithnid",
    "Task result was copied to clipboard" : "Cóipeáladh toradh an taisc chuig an ngearrthaisce",
    "Image generation" : "Giniúint íomhá",
    "Edit visible images" : "Cuir íomhánna infheicthe in eagar",
    "Click to toggle generation visibility" : "Cliceáil chun infheictheacht ghiniúna a scoránaigh",
    "Generated image" : "Íomhá ginte",
    "This generation has no visible images" : "Níl aon íomhánna infheicthe ag an nglúin seo",
    "Estimated generation time left: " : "Am giniúna measta fágtha:",
    "The image(s) will be displayed here once generated." : "Beidh an íomhá(í) le feiceáil anseo nuair a bheidh siad ginte.",
    "This image generation was scheduled to run in the background." : "Bhí an ghlúin íomhá seo le bheith ar siúl sa chúlra.",
    "Image generation failed" : "Theip ar ghiniúint íomhánna",
    "Rate limit reached. Please try again later." : "Teorainn rátaí bainte amach. Bain triail eile as ar ball.",
    "Unknown server query error" : "Earráid iarratais freastalaí anaithnid",
    "Failed to get images" : "Theip ar íomhánna a fháil",
    "Include the prompt in the result" : "Cuir an leid san áireamh sa toradh",
    "Number of results" : "Líon na dtorthaí",
    "Enter your question or task here:" : "Cuir isteach do cheist nó tasc anseo:",
    "Preview text generation by AI" : "Giniúint téacs réamhamhairc ag AI",
    "Notify when ready" : "Cuir ar an eolas nuair atá tú réidh",
    "Submit text generated by AI" : "Cuir isteach téacs ginte ag AI",
    "Regenerate" : "Athghin",
    "Preview" : "Réamhamharc",
    "You will be notified when the text generation is ready." : "Cuirfear in iúl duit nuair a bheidh an ghlúin téacs réidh.",
    "Notify when ready error" : "Cuir in iúl nuair a bhíonn an earráid réidh",
    "Unknown notify when ready error" : "Earráid anaithnid nuair a bheidh an earráid réidh",
    "The task could not be found. It may have been deleted." : "Níorbh fhéidir an tasc a fháil. Seans gur scriosadh é.",
    "Schedule Transcription" : "Trascríobh Sceideal",
    "Successfully scheduled transcription" : "Trascríobh sceidealta go rathúil",
    "Failed to schedule transcription" : "Theip ar an trascríobh a sceidealú",
    "Unknown API error" : "Earráid API anaithnid",
    "Preview image generation by AI" : "Réamhamhairc giniúint íomhá ag AI",
    "Submit image(s) generated by AI" : "Cuir isteach íomhá(í) ginte ag AI",
    "Send" : "Seol",
    "Show/hide advanced options" : "Taispeáin / cheilt roghanna casta",
    "Advanced options" : "Ardroghanna",
    "A description of the image you want to generate" : "Cur síos ar an íomhá is mian leat a ghiniúint",
    "Image generation cancel error" : "Earráid chealaithe giniúint íomhá",
    "Unknown image generation cancel error" : "Earráid chealaithe giniúint íomhá anaithnid",
    "Unexpected response from server." : "Freagra gan choinne ón bhfreastalaí.",
    "Image generation error" : "Earráid giniúna íomhá",
    "Unknown image generation error" : "Earráid giniúna íomhá anaithnid",
    "You will be notified when the image generation is ready." : "Cuirfear in iúl duit nuair a bheidh an ghiniúint íomhá réidh.",
    "Copy the link to this generation to clipboard" : "Cóipeáil an nasc go dtí an ghlúin seo chuig an ngearrthaisce",
    "Copy link to clipboard" : "Cóipeáil an nasc chuig an ngearrthaisce",
    "Image link copied to clipboard" : "Cóipeáladh nasc íomhá chuig an ngearrthaisce",
    "Image link could not be copied to clipboard" : "Níorbh fhéidir nasc íomhá a chóipeáil chuig an ngearrthaisce"
},
"nplurals=5; plural=(n==1 ? 0 : n==2 ? 1 : n<7 ? 2 : n<11 ? 3 : 4);");
