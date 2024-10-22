OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "Није успело обавештавање када је спремно; корисник није познат",
    "User not logged in" : "Корисник није пријављен",
    "User not found" : "Корисник није нађен",
    "Failed to create a chat session" : "Није успело креирање чет сесије",
    "Failed to update the chat session" : "Није успело ажурирање чет сесије",
    "Failed to delete the chat session" : "Није успело брисање чет сесије",
    "Failed to get chat sessions" : "Није успело добијање чет сесије",
    "Session not found" : "Сесија није пронађена",
    "Message content is empty" : "Садржај поруке је празан",
    "Failed to add a chat message" : "Није успело додавање чет поруке",
    "Failed to get chat messages" : "Није успело преузимање чет порука",
    "Failed to delete a chat message" : "Није успело брисање чет поруке",
    "Failed to delete the last message" : "Није успело брисање последње поруке",
    "Failed to add a chat message into DB" : "Није успело додавање чет поруке у базу података",
    "Failed to generate a title for the chat session" : "Није успело генерисање наслова чет сесије",
    "Nextcloud Assistant" : "Nextcloud Асистент",
    "Assistant task" : "Задатак асистента",
    "AI text generation" : "AI генерисање текста",
    "AI image generation" : "AI генерисање слике",
    "AI audio transcription" : "AI звучна транскрипција",
    "AI context writer" : "AI писац контекста",
    "Writing style: %1$s; Source material: %2$s" : "Стил писања: %1$s; Изворни материја: %2$s",
    "Task for \"%1$s\" has finished" : "Задатак за „%1$s” се завршио",
    "\"%1$s\" task for \"%2$s\" has finished" : "Задатак „%1$s” за „%2$s” се завршио",
    "Input: %1$s" : "Улаз: %1$s",
    "Result: %1$s" : "Резултат: %1$s",
    "View results" : "Види резултате",
    "Task for \"%1$s\" has failed" : "Задатак за „%1$s” није успео",
    "\"%1$s\" task for \"%2$s\" has failed" : "Задатак „%1$s” за „%2$s” није успео",
    "View task" : "Прикажи задатак",
    "Generate text" : "Генериши текст",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "Пошаљите захтев Асистенту, на пример: напиши први нацрт презентације, дај ми сугестије за презентацију, напиши нацрт одговора мом колеги.",
    "Chat with AI" : "Чет са AI",
    "Chat with an AI model." : "Четујте са AI моделом.",
    "Artificial Intelligence" : "Вештачка интелигенција",
    "Process and transform text" : "Обрада и трансформација текста",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "Ова апликација доноси на Nextcloud кориснички интерфејс за могућност обраде текста.\n\nОна омогућава да корисници покрену задатке AI обраде, да се обавесте када се ти задаци заврше и да погледају резултате.\nАсистент се такође појављује и у осталим апликацијама као што је  Текст како би се једноставно обрадили делови документа.\n\nВише детаља у вези са асистентовим OCS API и могућностма за интеграцију чеоног приказа се налази у\n[програмерској документацији](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Како се користи\n\nПојављује се нова ставка у менију десног заглавља. Када се кликне на њу, приказаће се асистент и ту можете да изаберете врсту задатка\nи да поставите упит који желите да се обради.\n\nЗадатак може одмах да се покрене, или да се закаже, што зависи од процене потребног времена коју достави пружалац AI услуге.\nКада се задатак закаже, покренуће се као посао у позадини. Примићете обавештење након завршетка посла, и из њега ћете моћи да прикажете резултате.\n\nОстале апликације могу да се интегришу са асистентом. На пример, Текст ће да прикаже дугме у линији поред сваког пасуса којим\nдиректно бирате врсту задатка за обраду тог пасуса. Када се задатак изабере на овај начин, отвориће се асистент са већ изабраним задатком\nи постављеним улазним текстом.\n\nВише детаља и снимака екрана се налази у [корисничкој документацији](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Функције\n\nЛиста доступних задатака у асистену зависи од доступних пружаоца услуга које су инсталирале остале апликације.\nОво значи да имате потпуну слободу избора сервиса/софтвера који ће извршавати ваши задатке AI обраде.\n\n### Пружаоци услуге обраде текста\n\nЗа сада, [Local Large language model](https://github.com/nextcloud/llm2#readme)\nи [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai) апликације\nукључују и пружаоце услуге обраде текста за:\n* Резимирање\n* Издвајање тема\n* Генерисање линије наслова\n* Добијања одговора на произвољни захтев\n* Реформулисање (само OpenAi/LocalAi)\n* Писање контекста: генерисање текста у наведеном стилу. Стил може да се опише или зада текстом за пример.\n\n### Текст у слику (генерисање слике)\n\nПознати пружаоци усуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Стабилна Дифузија](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Говор у текст (звучна транскрипција)\n\nПознати пружаоци услуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Локални Whisper Говор-у-Текст](https://apps.nextcloud.com/apps/stt_whisper)\n\nВише детаља о томе како се ово подешава наћи ћете у [админ документацији](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "У документацији за администрацију можете да пронађите више детаља о начину на који се подешава Асистент, као и о препорученим позадинским механизмима.",
    "Select which features you want to enable" : "Изаберите могућности које желите да укључите",
    "Top-right assistant" : "Асистент у горњем десном углу",
    "To be able to use this feature, please install at least one AI text processing provider." : "Да бисте могли да користите ову функцију, молимо вас да инсталирате барем један пружалац услуге AI обраде текста.",
    "AI text generation smart picker" : "Паметни бирач AI генерисања текста",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "Да бисте укључили ову функцију, молимо вас да инсталирате било који пружалац услуге AI обраде текста за задатак типа слободног упита:",
    "Text-to-image smart picker" : "Паметни бирач претварања текста у слику",
    "To enable this feature, please install a text-to-image provider:" : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања текста у слику:",
    "Speech-to-text smart picker" : "Паметни бирач претварања говора у текст",
    "To enable this feature, please install a speech-to-text provider:" : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања говора у текст:",
    "Chat User Instructions for Chat Completions" : "Чет корисничка упутства за чет довршавања",
    "It is passed on to the LLM for it to better understand the context." : "Прослеђује се LLM да би боље разумео контекст.",
    "\"{user}\" is a placeholder for the user's display name." : "„{user}” је чувар места за приказано име корисника.",
    "Chat User Instructions for Title Generation" : "Чет корисничка упутства за генерисање наслова",
    "It is passed on to the LLMs to let it know what to do" : "Прослеђује се LLM моделима да би знали шта да раде",
    "\"{user}\" is a placeholder for the user's display name here as well." : "„{user}” је и овде чувар места за приказано име корисника.",
    "Last N messages to consider for chat completions" : "Последњих N порука које се узимају у обзир за чет довршавања",
    "This includes the user instructions and the LLM's messages" : "Ово обухвата инструкције корисника и поруке Великог језичког модела",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "Број порука које се узимају у обзир за чет довршавања (не узимајући у обзир корисничке инструкције, оне се увек узимају у разматрање)",
    "Assistant admin options saved" : "Сачуване су админ опције асистента",
    "Failed to save assistant admin options" : "Није успело чување админ опција асистента",
    "The task ran successfully but the result is identical to the input." : "Задатак се извршио исправно, али је резултат исти као и унос.",
    "This output was generated by AI. Make sure to double-check and adjust." : "Овај излаз је генерисала AI. Обавезно детаљно проверите и исправите.",
    "Back to the assistant" : "Назад на асистента",
    "Previous \"{taskTypeName}\" tasks" : "Претходни „{taskTypeName}” задаци",
    "Show previous tasks" : "Прикажи претходне задатке",
    "Hide advanced options" : "Сакриј напредне опције",
    "Show advanced options" : "Прикажи напредне опције",
    "Try again" : "Покушајте поново",
    "Send request" : "Пошаљи захтев",
    "Launch this task again" : "Поново покрени овај задатак",
    "Launch a task" : "Покрени задатак",
    "Generate a first draft for a blog post about privacy" : "Генерише први нацрт блог поста у вези са приватности",
    "What is the venue for the team retreat this quarter?" : "У коју установу се тим повлачи овог тромесечја?",
    "Type or paste the text to summarize" : "Откуцајте или налепите текст за који желите сажетак",
    "Type or paste the text to generate a headline for" : "Откуцајте или налепите текст за који желите да се генерише наслов",
    "Type or paste the text to extract the topics from" : "Откуцајте или налепите текст из којег желите да се издвоје теме",
    "landscape trees forest peaceful" : "пејзаж дрвеће шума мир",
    "a number" : "број",
    "Shakespeare or an example of the style" : "Шекспир или пример стила",
    "A description of what you need or some original content" : "Опис онога што желите или неки оригинални садржај",
    "Close" : "Затвори",
    "Close Nextcloud Assistant" : "Затвори Nextcloud Асистент",
    "New conversation" : "Нови разговор",
    "Loading conversations…" : "Учитавају се разговори…",
    "No conversations yet" : "Још увек нема разговора",
    "Delete" : "Избриши",
    "Conversation title" : "Наслов разговора",
    "Edit title" : "Измени наслов",
    "Generate title" : "Генериши наслов",
    "Creating a new conversation" : "Креира се нови разговор",
    "Hello there! What can I help you with today?" : "Здраво! Како данас могу да вам помогнем?",
    "Try sending a message to spark a conversation." : "Покушајте да пошаљете поруку и тако започнете разговор.",
    "Load older messages" : "Учитај старије поруке",
    "Retry response generation" : "Поново покушај генерисање одговора",
    "Error updating title of conversation" : "Грешка приликом ажурирања наслова разговора",
    "Untitled conversation" : "Разговор без наслова",
    "Error generating a title for the conversation" : "Грешка приликом генерисања наслова за разговор",
    "Error deleting conversation" : "Грешка приликом брисања разговора",
    "Error fetching conversations" : "Грешка приликом преузимања разговора",
    "Error deleting message" : "Грешка при брисању поруке",
    "Error fetching messages" : "Грешка при дохватању порука",
    "Error creating a new message" : "Грешка при креирању нове поруке",
    "Invalid response received for a new conversation request" : "Примљен је неисправан одговор на захтев за нови разговор",
    "Error creating a new conversation" : "Грешка при креирању новог разговора",
    "Error generating a response" : "Грешка при генерисању одговора",
    "Error regenerating a response" : "Грешка при поновном генерисању одговора",
    "Error loading messages" : "Грешка при учитавању порука",
    "Loading messages…" : "Учитавају се поруке…",
    "The text must be shorter than or equal to {maxLength} characters, currently {length}" : "Текст мора да буде максимално {maxLength} карактера или краћи, тренутна дужина је {length}",
    "Cancel editing" : "Откажи уређивање",
    "Submit" : "Пошаљи",
    "Type a message…" : "Откуцајте поруку…",
    "Processing…" : "Обрађује се…",
    "You" : "Ви",
    "Message copied to clipboard" : "Порука је копирана у клипборд",
    "Copy message" : "Копирај поруку",
    "Regenerate message" : "Поново генериши поруку",
    "Delete message" : "Обриши поруку",
    "Selective context" : "Контекст за разликовање",
    "Select Files/Folders" : "Изабери фајлове/фолдере",
    "Select Providers" : "Изабери пружаоце услуге",
    "Choose Files/Folders" : "Изабери фајлове/фолдере",
    "Choose" : "Изаберите",
    "Clear Selection" : "Уклони избор",
    "Error fetching default provider key" : "Грешка приликом преузимања подразумеваног кључа пружаоца услуге",
    "Error fetching providers" : "Грешка приликом преузимања листе пружаоца услуге",
    "No sources referenced" : "Није указан ниједан извор",
    "No provider found" : "Није пронађен ниједан пружалац услуге",
    "AI Providers need to be installed to use the Assistant" : "Да би се користио Асистент, морају да буду инсталирани пружаоци AI услуге",
    "tool" : "алат",
    "integration" : "интеграција",
    "complete AI documentation" : "комплетна AI документација",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "Апликације пружаоца AI услуге могу да се пронађу у одељцима подшавања апликација {toolLink} и {integrationLink}.",
    "You can also check the {aiAdminDocLink}" : "Такође можете да погледате и {aiAdminDocLink}",
    "AI image generation smart picker" : "Паметни бирач AI генерисања слике",
    "AI transcription smart picker" : "Паметни бирач AI транскрибовања",
    "No suitable providers are available. They must first be enabled by your administrator." : "Није доступан ниједан пригодни пружалац услуге. Ваш администратор најпре треба да их укључи.",
    "Configured Backends" : "Конфигурисани позадински механизми",
    "The following services are used as backends for Nextcloud Assistant:" : "Следећи сервиси се користе као позадински механизми за Nextcloud Асистент:",
    "{providerName} for {taskName}" : "{providerName} за {taskName}",
    "Assistant options saved" : "Сачуване су опције асистента",
    "Failed to save assistant options" : "Није успело чување опција асистента",
    "Getting results…" : "Преузимање резултата",
    "Run task in the background and get notified" : "Покрени задатак у позадини и обавести ме",
    "Back to the Assistant" : "Назад на Асистента",
    "Cancel task" : "Откажи задатак",
    "You will receive a notification when it has finished" : "Добићете обавештење када се извршавање заврши",
    "Your task has been scheduled" : "Ваш задатак је заказан",
    "Nothing yet" : "Још увек ништа",
    "You have not submitted any \"{taskTypeName}\" task yet" : "Још увек нисте предали ниједан \"{taskTypeName}\" задатак",
    "Cancel" : "Откажи",
    "Succeeded" : "Успело",
    "Cancelled" : "Отказано",
    "Failed" : "Није успело",
    "Running" : "Трчање",
    "Scheduled" : "Заказано",
    "Input" : "Унос",
    "Result" : "Резултат",
    "This task is scheduled" : "Овај задатак је заказан",
    "Unknown status" : "Статус се не зна",
    "_{n} image has been generated_::_{n} images have been generated_" : ["Генерисана је {n} слика","Генерисане су {n} слике","Генерисано је {n} слика"],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : ["Заказано је генерисање {n} слике","Заказано је генерисање {n} слике","Заказано је генерисање {n} слика"],
    "Start recording" : "Почни снимање",
    "Dismiss recording" : "Одбаци снимак",
    "End recording and send" : "Заврши снимање и пошаљи",
    "Error while recording audio" : "Грешка приликом снимања звука",
    "Choose file" : "Изаберите фајл",
    "Choose a file" : "Одаберите фајл",
    "No file selected" : "Нисте изабрали фајл",
    "Choose a value" : "Изаберите вредност",
    "Upload from device" : "Отпреми са уређаја",
    "Select from Nextcloud" : "Изабери из Nextcloud",
    "Pick one or multiple files" : "Изаберите један или више фајлова",
    "Remove this media" : "Уклони овај медиј",
    "Download this media" : "Преузми овај медиј",
    "Share this media" : "Дели овај медиј",
    "Share" : "Пдели",
    "Could not upload the recorded file" : "Није могао да се отпреми снимљени фајл",
    "Output file share link copied to clipboard" : "Линк за дељење излазног фајла је копиран у клипборд",
    "Could not copy to clipboard" : "Не могу да копирам у оставу",
    "Pick a file" : "Изаберите фајл",
    "Clear value" : "Обриши вредност",
    "Type some number" : "Откуцајте неки број",
    "The current value is not a number" : "Тренутна вредност није број",
    "Advanced" : "Напредно",
    "Copy output" : "Копирај излаз",
    "Copy" : "Копирај",
    "Choose a text file" : "Изаберите текст фајл",
    "Unexpected response from text parser" : "Неочекивани одговор од парсера текста",
    "Could not parse file" : "Фајл не може да се парсира",
    "Result could not be copied to clipboard" : "Резултат није могао да се копира у клипборд",
    "Upload file" : "Отпреми фајл",
    "Could not upload the file" : "Фајл није могао да се отпреми",
    "Could not upload the files" : "Фајлови нису могли да се отпреме",
    "Your task with ID {id} has failed" : "Ваш задатак чији је ID {id} се није успешно завршио",
    "Failed to schedule your task" : "Није успело заказивање вашег задатка",
    "Submit the current task's result" : "Поднеси резултат текућег задатка",
    "Assistant error" : "Грешка Асистента",
    "Please log in to view the task result" : "Да бисте видели резултат задатка, молимо вас да се пријавите",
    "This task does not exist or has been cleaned up" : "Овај задатак не постоји или је обрисан",
    "Failed to schedule the task" : "Није успело заказивање задатка",
    "Failed to get the last message" : "Није успело преузимање последње поруке",
    "Failed to process prompt; unknown user" : "Није успела обрада захтева; корисник није познат",
    "Failed to get prompt history; unknown user" : "Није успело преузимање историје захтева; корисник није познат",
    "Failed to get outputs; unknown user" : "Није успео пријем излаза; корисник није познат",
    "Failed to cancel generation; unknown user" : "Није успело отказивање генерисања; корисник није познат",
    "Some internal error occurred. Contact your sysadmin for more info." : "Дошло је до неке интерне грешке. Да бисте сазнате више, обратите се свом систем админу.",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Није пронађен ниједан пружалац услуге претварања говора у текст, инсталирајте неки из продавнице апликација ако желите да користите ову функцију.",
    "Audio file not found." : "Није пронађен аѕудио фајл",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "Нема дозвола за креирање фајла/директоријума снимка. Обратите се систем админу да бисте решили проблем.",
    "Failed to set visibility of image files; unknown user" : "Није успело постављање видљивости фајлова слике; корисник није познат",
    "Unknown error while retrieving prompt history." : "Грешка приликом преузимања историје захтева",
    "Context write" : "Писање контекста",
    "Writes text in a given style based on the provided source material." : "Пише текст у датом стилу заснован на наведеном изворном материјалу.",
    "Transcribe" : "Транскрибуј",
    "Transcribe audio to text" : "Транскрибуј звук у текст",
    "Generate image" : "Генериши слику",
    "Generate an image from a text" : "Генерише слику из текста",
    "Canceled by user" : "Отказао је корисник",
    "FreePromptTaskType not available" : "Није доступан FreePromptTaskType",
    "Failed to run or schedule a task" : "Није успело покретање или заказивање задатка",
    "Failed to get prompt history" : "Није успело преузимање историје захтева",
    "Generation not found" : "Није пронађено генерисање",
    "Multiple tasks found" : "Пронађено је више задатака",
    "Transcript not found" : "Није пронађен транскипт",
    "No text to image processing provider available" : "Није доступан ниједан пружалац услуге обраде текста у слику",
    "Image request error" : "Грешка захтева слике",
    "Image generation not found." : "Није пронађено генерисање слике.",
    "Retrieving the image generation failed." : "Није успело добављање генерисања слике.",
    "Image generation failed." : "Није успело генерисање слике.",
    "Image file names could not be fetched from database" : "Иза базе података нису могла да се преузму имена фајлова слике",
    "Image file not found in database" : "У бази података није пронађен фајл слике",
    "Image file not found" : "Није пронађен фајл слике",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)" : "Ова апликација доноси на Nextcloud кориснички интерфејс за могућност обраде текста.\n\nОна омогућава да корисници покрену задатке AI обраде, да се обавесте када се ти задаци заврше и да погледају резултате.\nАсистент се такође појављује и у осталим апликацијама као што је  Текст како би се једноставно обрадили делови документа.\n\nВише детаља у вези са асистентовим OCS API и могућностма за интеграцију чеоног приказа се налази у\n[програмерској документацији](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### Како се користи\n\nПојављује се нова ставка у менију десног заглавља. Када се кликне на њу, приказаће се асистент и ту можете да изаберете врсту задатка\nи да поставите упит који желите да се обради.\n\nЗадатак може одмах да се покрене, или да се закаже, што зависи од процене потребног времена коју достави пружалац AI услуге.\nКада се задатак закаже, покренуће се као посао у позадини. Примићете обавештење након завршетка посла, и из њега ћете моћи да прикажете резултате.\n\nОстале апликације могу да се интегришу са асистентом. На пример, Текст ће да прикаже дугме у линији поред сваког пасуса којим\nдиректно бирате врсту задатка за обраду тог пасуса. Када се задатак изабере на овај начин, отвориће се асистент са већ изабраним задатком\nи постављеним улазним текстом.\n\nВише детаља и снимака екрана се налази у [корисничкој документацији](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Функције\n\nЛиста доступних задатака у асистену зависи од доступних пружаоца услуга које су инсталирале остале апликације.\nОво значи да имате потпуну слободу избора сервиса/софтвера који ће извршавати ваши задатке AI обраде.\n\n### Пружаоци услуге обраде текста\n\nЗа сада, [Large language model](https://github.com/nextcloud/llm#readme)\nи [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai) апликације\nукључују и пружаоце услуге обраде текста за:\n* Резимирање\n* Издвајање тема\n* Генерисање линије наслова\n* Добијања одговора на произвољни захтев\n* Реформулисање (само OpenAi/LocalAi)\n* Писање контекста: генерисање текста у наведеном стилу. Стил може да се опише или зада текстом за пример.\n\n### Текст у слику (генерисање слике)\n\nПознати пружаоци усуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Стабилна Дифузија](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Говор у текст (звучна транскрипција)\n\nПознати пружаоци услуге:\n* [OpenAi/LocalAI интеграција](https://apps.nextcloud.com/apps/integration_openai)\n* [Локални Whisper Говор-у-Текст](https://apps.nextcloud.com/apps/stt_whisper)",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "Да бисте укључили ову функцију, молимо вас да инсталирате било који пружалац услуге AI обраде текста за задатак типа слободног упита.",
    "To enable this feature, please install a text-to-image provider." : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања текста у слику.",
    "To enable this feature, please install a speech-to-text provider." : "Да бисте укључили ову функцију, молимо вас да инсталирате пружалац услуге претварања говора у текст.",
    "Image storage" : "Складиштење слике",
    "Image generation idle time (days)" : "Време неактивности генерисане слике (дана)",
    "Days until generated images are deleted if they are not viewed" : "Број дана након којег се генерисане слике бришу ако нису погледане",
    " This includes the user instructions and the LLM's messages" : " Ово укључује корисничке инструкције и поруке LLM-а",
    "Writing style" : "Стил писања",
    "Describe the writing style you want to use or supply an example document." : "Опишите стил који желите да користите или наведите документ за пример.",
    "Source material" : "Изворни материјал",
    "Describe what you want the document to be written on." : "Изаберите на чему желите да документ буде написан.",
    "Type some text" : "Откуцајте неки текст",
    "Output" : "Излаз",
    "Copy output text to clipboard" : "Копира излазни текст у клипборд",
    "Reset the output value to the originally generated one" : "Ресетује излазну вредност на оригинално генерисану",
    "Reset" : "Ресетуј",
    "Text Generation" : "Генерисање текста",
    "Audio transcription" : "Звучни транскрипт",
    "Unknown Result Type" : "Непознати тип резултата",
    "The task ran successfully but the generated text is empty." : "Задатак се извршио исправно, али је генерисани текст празан.",
    "Run a task" : "Покрени задатак",
    "Loading conversations..." : "Учитавају се разговори",
    "Edit Title" : "Уреди наслов",
    "Generate Title" : "Генериши наслов",
    "Loading messages..." : "Учитавају се поруке…",
    "Type a message..." : "Откуцајте поруку",
    "Thinking..." : "Размишљам",
    "Text generation content" : "Садржај генерисања текста",
    "The text generation task was scheduled to run in the background." : "Задатак генерисања текста је заказан за извршавање у позадини.",
    "Estimated completion time: " : "Процењено време завршетка:",
    "This can take a while…" : "Ово може да потраје",
    "Some generations are still being processed in the background! Showing finished generations." : "Нека генерисања се још увек обрађују у позадини! Приказују се завршена генерисања.",
    "Loading generations…" : "Учитавају се генерисања",
    "Include prompt in the final result" : "Укључи захтев у коначни резултат",
    "Unexpected server response" : "Неочекивани одговор сервера",
    "The processing of generations failed." : "Није успео процес генерисања.",
    "The processing of some generations failed." : "Није успело обрађивање неких генерисања.",
    "Text generation error" : "Грешка генерисања текста",
    "Unknown text generation API error" : "Непозната грешка API генерисања текста",
    "Prompt" : "Захтев за унос",
    "Result {index}" : "Резултат {index}",
    "Run in the background" : "Покрени у позадини",
    "Record Audio" : "Сними аудио",
    "Choose Audio File" : "Изаберите аудио фајл",
    "Reset recorded audio" : "Ресетуј снимљени аудио",
    "Stop recording" : "Заустави снимање",
    "No audio file selected" : "Није изабран ниједан звучни фајл",
    "Selected Audio File:" : "Изабрани аудио фајл:",
    "Choose audio file in your storage" : "Изаберите аудио фајл из складишта",
    "Choose audio File" : "Изаберите аудио фајл",
    "Copy result" : "Копирај резултат",
    "Audio input" : "Аудио улаз",
    "Unknown input" : "Непознати улаз",
    "Running…" : "Извршава се…",
    "Unknown error" : "Непозната грешка",
    "Task result was copied to clipboard" : "Резултат задатка је копиран у клипборд",
    "Image generation" : "Генерисање слике",
    "Edit visible images" : "Уреди видљиве слике",
    "Click to toggle generation visibility" : "Кликните да промените видљивост слике",
    "Generated image" : "Генерисана слика",
    "This generation has no visible images" : "Ово генерисање нема видљивих слика",
    "Estimated generation time left: " : "Процењено преостало време генерисања:",
    "The image(s) will be displayed here once generated." : "Слика (или више њих) ће се приказати овде након што се генерише.",
    "This image generation was scheduled to run in the background." : "Овај задатак генерисања слике је заказан за извршавање у позадини.",
    "Image generation failed" : "Није успело генерисање слике",
    "Rate limit reached. Please try again later." : "Достигнуто је ограничење. Молимо вас да касније покушајте поново.",
    "Unknown server query error" : "Непозната грешка серверског упита",
    "Failed to get images" : "Није успело добијање слика",
    "Include the prompt in the result" : "Укључи захтев у резултату",
    "Number of results" : "Број резултата",
    "Enter your question or task here:" : "Унесите овде своје питање или задатак:",
    "Preview text generation by AI" : "Прегледај текст који је генерисала AI",
    "Notify when ready" : "Обавести када је спремно",
    "Submit text generated by AI" : "Предај текст који је генерисала AI",
    "Regenerate" : "Регенериши",
    "Preview" : "Преглед",
    "You will be notified when the text generation is ready." : "Бићете обавештени када генерисани текст буде спреман.",
    "Notify when ready error" : "Грешка при обавештавању о завршетку",
    "Unknown notify when ready error" : "Непозната грешка при обавештавању о завршетку",
    "The task could not be found. It may have been deleted." : "Није могао да се пронађе задатак. Можда је обрисан.",
    "Schedule Transcription" : "Закажи транскрипцију",
    "Successfully scheduled transcription" : "Транскрипција је успешно заказана",
    "Failed to schedule transcription" : "Није успело заказивање транскрипције",
    "Unknown API error" : "Непозната API грешка",
    "Preview image generation by AI" : "Прегледај слику коју је генерисала AI",
    "Submit image(s) generated by AI" : "Предај слику (или више њих) коју је генерисала AI",
    "Send" : "Пошаљи",
    "Show/hide advanced options" : "Прикажи/сакриј напредне опције",
    "Advanced options" : "Напредне опције",
    "A description of the image you want to generate" : "Опис слике коју желите да генеришете",
    "Image generation cancel error" : "Грешка приликом отказивања генерисања слике",
    "Unknown image generation cancel error" : "Непозната грешка приликом отказивања генерисања слике",
    "Unexpected response from server." : "Неочекивани одговор сервера.",
    "Image generation error" : "Грешка при генерисању слике",
    "Unknown image generation error" : "Непозната грешка генерисања слике",
    "You will be notified when the image generation is ready." : "Бићете обавештени када генерисање слике заврши посао.",
    "Copy the link to this generation to clipboard" : "Копирај у клипборд линк на ово генерисање",
    "Copy link to clipboard" : "Копирај везу у оставу",
    "Image link copied to clipboard" : "Линк слике је копиран у клипборд",
    "Image link could not be copied to clipboard" : "Линк слике није могао да се копира у клипборд"
},
"nplurals=3; plural=(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2);");
