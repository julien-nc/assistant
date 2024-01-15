OC.L10N.register(
    "assistant",
    {
    "Error in transcript access time update call" : "خطأ في استدعاء التحديث لوقت الوصول إلى النص",
    "Multiple transcripts found" : "تمّ العثور على نصوص متعددة",
    "Transcript not found" : "النص غير موجود",
    "Some internal error occurred. Contact your sysadmin for more info." : "حدث خطأ داخلي. تواصل مع مشرف النظام عندك لمزيد من المعلومات. ",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "لم يمكن أيجاد أي مُزوِّد لخدمة التحويل من كلام إلى نص. قم بتصيب مُزوِّد من متجر التطبيقات ليمكنك استعما ل هذه الخاصّية.",
    "Audio file not found." : "الملف الصوتي غير موجود.",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "لا تمتلك الإذن بإنشاء ملف أو مجلد للتسجيلات. تواصل مع مشرف النظام عندك لحل الإشكالية.",
    "Nextcloud Assistant" : "مُساعِد نكست كلاود Nextcloud Assistant",
    "Text to image" : "نص إلى صورة",
    "Speech to text" : "تحويل الكلام إلى نص",
    "Task for \"%1$s\" has finished" : "مُهِمَّة لـ \"%1$s\" تمّ إنجازها",
    "\"%1$s\" task for \"%2$s\" has finished" : "\"%1$s\" مُهِمَة لـ \"%2$s\" تمّ إنجازها",
    "Input: %1$s" : "مُدخلات: %1$s",
    "Result: %1$s" : "النتيجة: %1$s",
    "View results" : "أظهِر النتائج",
    "Task for \"%1$s\" has failed" : "مُهِمّة لـ \"%1$s\" أخفقت",
    "\"%1$s\" task for \"%2$s\" has failed" : "\"%1$s\" مُهِمّة لـ \"%2$s\" أخفقت",
    "View task" : "أظهِر المُهِمّة",
    "AI text generation" : "التوليد النّصي بالذكاء الاصطناعي",
    "Speech to Text" : "كلام إلى نص",
    "AI image generation" : "توليد صور بالذكاء الصناعي",
    "FreePromptTaskType not available" : "FreePromptTaskType غير متوفر",
    "Failed process prompt; unknown user" : "فشل عملية الطلب؛ المستخدِم غير معروف",
    "Failed to run or schedule a task" : "فشل في تنفيذ أو جدولة مهمة",
    "Failed to get prompt history" : "فشل في الحصول على تاريخ المٌطالبة",
    "Generation not found" : "التوليدة غير موجودة",
    "Failed to cancel generation" : "فشل في إلغاء التوليدة",
    "No text to image processing provider available" : "لا يوجد مزود لتحويل النص إلى صورة",
    "Image request error" : "خطأ في طلب الصورة",
    "View" : "عرض",
    "Image generation not found." : "تعذّر العثور على توليد الصِّوَر.",
    "Retrieving the image generation failed." : "إستعادة توليدة النص فشلت.",
    "Image generation failed." : "إخفاق في توليد الصِّوَر.",
    "Image file names could not be fetched from database" : "تعذّر جلب أسماء ملفات الصِّوَر من قاعدة البيانات",
    "Image file not found in database" : "ملف الصورة غير موجود في قاعدة البيانات",
    "Image file not found" : "ملف الصورة غير موجود",
    "Artificial Intelligence" : "الذكاء الاصطناعي",
    "Process and transform text" : "معالجة و تحويل النصوص",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch text processing tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\n### How to use it\n\nA new right header  menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input text you want to process.\n\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\n### Text processing providers\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your text processing tasks.\nSo far, the [Large language model](https://github.com/nextcloud/llm#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)" : "يُوفّر هذا التطبيق واجهةً لاستخدام ميزة معالجة النصوص من نكست كلاود Nextcloud text processing feature. \n\nيسمح التطبيق للمستخدمين ببدء مهام معالجة النصوص، ثم يقوم بإشعارهم عند الانتهاء لرؤية النتائج. \nيظهر المُساعد أيضًا في تطبيقات أخرى مثل Text لمعالجة أجزاء من المستند بسهولة.\n\n### كيفية استخدامه \n\nيظهر مُدخَل جديد في قائمة الترويسة الجانبية. بمجرد النقر فوق المُدخَل، يتم عرض المُساعد حيث يمكنك تحديد نوع المهمة و إدخال النص الذي تريد معالَجته. \nبمجرد جدولة المهمة، سيتم تشغيلها كوظيفة في الخلفية. عند الانتهاء، ستتلقى إشعاراً حيث يمكنك عرض النتائج. \nيمكن أن تتكامل التطبيقات الأخرى مع هذا المٌساعد. على سبيل المثال، سيعرض النص زرًا مضمنًا بجانب كل فقرة لتحديد نوع مهمة مباشرة لمعالجة هذه الفقرة. \n\n### مزودو معالجة النصوص في المساعد \n\nتعتمد قائمة المهام المتاحة على المزودين المتاحين المثبتين عبر تطبيقات أخرى. \nهذا يعني أن لديك الحرية الكاملة فيما يتعلق بالخدمة / البرامج التي ستتولى تشغيل مهام معالجة النصوص الخاصة بك. \n\nحتى الآن تتوافر معالجات النصوص [Large language model] (https://github.com/nextcloud/llm#readme) و تطبيقات [OpenAi / LocalAI] (https://apps.nextcloud.com/apps/integration_openai ) \nللقيام بالخدمات التالية: \n* تلخيص \n* استخراج المواضيع \n* إنشاء العناوين \n* الحصول على إجابات من المَحثَات prompt المجانية \n* إعادة الصياغة (OpenAi / LocalAi فقط)",
    "Select which features you want to enable" : "اختر أى السمات تريد تمكينها",
    "Top-right assistant" : "المساعد في الأعلى على الجانب",
    "To enable this feature, please install any AI text processing provider." : "لتمكين هذه الخاصّيّة، قم رجاءً بتثبيت أيَّ مزود لمعالجة النصوص بالذكاء الصناعي.",
    "AI text generation smart picker" : "لاقط ذكي لتوليد النصوص بالذكاء الصناعي",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "لتمكين هذه الخاصّيّة، قم رجاءً بتثبيت مزود لمعالجة النصوص بالذكاء الصناعي لطلب المهام من النوع المجاني.",
    "Text-to-image smart picker" : "اللاقط الذكي لتحويل النص إلى صورة",
    "To enable this feature, please install a text-to-image provider." : "لتمكين هذه الخاصِّيّة، قم رجاءً بتثبيت \"مُزوِّد تحويل النصوص إلى صور\" text-to-image provider.",
    "Speech-to-text smart picker" : "اللاقط الذكي لتحويل الكلام إلى نص",
    "To enable this feature, please install a speech-to-text provider." : "لتمكين هذه الخاصّية، قم رجاءً بتثبيت مزُوِّد لتحويل الكلام إلى نص.",
    "Image storage" : "تخزين الصِّوَر",
    "Image generation idle time (days)" : "وقت خمول توليد الصور (بالأيام)",
    "Days until generated images are deleted if they are not viewed" : "الزمن بالأيام قبل حذف الصور المولدة إذا لم يتم عرضها",
    "Assistant admin options saved" : "تمّ حفظ خيارات المشرف للمُساعد  ",
    "Failed to save assistant admin options" : "تعذّر حفظ خيارات المشرف للمُساعد ",
    "Output" : "المُخرَجَات",
    "This output was generated by AI. Make sure to double-check and adjust." : "المخرجات تمّ توليدها بالذكاء الاصطناعي. إنتبه لتأكيد المراجعة و الضبط.",
    "Copy output text to clipboard" : "نسخ المخرجات  إلى الحافظة",
    "Copy output" : "نسخ المخرجات",
    "Reset the output value to the originally generated one" : "إعادة تعيين قيمة المخرجات إلى تلك المٌولَّدة بدايةً",
    "Reset" : "إعادة التعيين",
    "Close" : "إغلاق",
    "Close Nextcloud Assistant" : "أغلِق مُساعِد نكست كلاود Nextcloud Assistant",
    "Text Generation" : "توليد النص",
    "Unknown Result Type" : "نوع النتيجة غير معروف",
    "Result could not be copied to clipboard" : "يتعذّر نسخ النتيجة إلى الحافظة",
    "Input" : "مُدخَلات",
    "Type some text" : "أكتُب أيَّ نص",
    "Result" : "النتيجة",
    "Run a task" : "تنفيذ مهمة",
    "Schedule an assistant task" : "جَدْوِل مُهمَّة للمُساعد ",
    "Schedule" : "جدْوَل",
    "Copy" : "إنسَخ",
    "Try again" : "عاود المحاولة",
    "Send request" : "أرسِل طلباً",
    "Text generation content" : "محتوى توليدة نَصّية",
    "The text generation task was scheduled to run in the background." : "مهمة توليد النص تمّت جدولتها لتنفذ في الخلفية",
    "Estimated completion time: " : "الوقت التقريبي المقدر للانتهاء:",
    "This can take a while…" : "هذا يمكن أن يستغرق بعض الوقت ...",
    "Some generations are still being processed in the background! Showing finished generations." : "بعض التوليدات مازالت تحت المعالجة في الخلفية! عرض التوليدات الجاهزة.",
    "Loading generations…" : "تحميل التوليدات ...",
    "Include prompt in the final result" : "تضمين الطلب في النتيجة النهائية",
    "Unexpected server response" : "استجابة غير متوقعة من الخادوم",
    "The processing of generations failed." : "معالجة التوليدات أخفقت.",
    "The processing of some generations failed." : "معالجة بعض التوليدات أخفقت.",
    "Text generation error" : "خطأ في التوليدة النصية",
    "Unknown text generation API error" : "خطأ غير محدد في API الخاص بتوليد النصوص",
    "Prompt" : "المُطالبة prompt",
    "Result {index}" : "النتيجة {index}",
    "Free prompt smart picker" : "لاقط ذكي للطلب المجاني",
    "No suitable providers are available. They must first be enabled by your administrator." : "لا يوجد أيّ مُزوِّد مستقر متاح. يجب أوّلاً تمكينه من قِبل المُشرِف.",
    "Assistant options saved" : "تمّ حفظ خيارات المُساعِد",
    "Failed to save assistant options" : "تعذّر حفظ خيارات المُساعِد",
    "Getting results…" : "البدء ...",
    "Run in the background" : "شغِّل في الخلفية",
    "You will receive a notification when it has finished" : "سوف تستلم إشعاراً عند الانتهاء",
    "Your task has been scheduled" : "مُهمَّتك تمّت جدولتها",
    "Image generation" : "توليد الصورة",
    "Edit visible images" : "تعديل صور مرئية",
    "Click to toggle generation visibility" : "إضغَط لتبديل وضعية رؤية التوليد",
    "Generated image" : "صورة مُولّدة",
    "This generation has no visible images" : "التوليد ليس فيه أي صور مرئية",
    "Estimated generation time left: " : "المتبقى من الزمن المقدر للتوليد:",
    "The generated image is shown once ready." : "سيتم عرض الصور المولدة بمجرد تجهيزها",
    "This image generation was scheduled to run in the background." : "توليد الصور تمّت جدولته ليتم تنفيذه في الخلفية.",
    "Image generation failed" : "إخفاق في توليد الصورة",
    "Rate limit reached. Please try again later." : "تمّ استنفاذ حصتك في الخدمة. يرجى المحاولة في وقت آخر.",
    "Unknown server query error" : "خطأ غير معروف عند استعلام الخادوم",
    "Enter your question or task here:" : "أدخِل سؤالك أو مهمتك هنا:",
    "Preview text generation by AI" : "معاينة توليدة نصية بالذكاء الاصطناعي",
    "Notify when ready" : "أعلِمني عندما تكون جاهزاً",
    "Submit text generated by AI" : "إرسال النص المُولّد بالذكاء الاصطناعي",
    "Submit" : "إرسال ",
    "Regenerate" : "أعِد التوليد",
    "Preview" : "مُعاينة",
    "You will be notified when the text generation is ready." : "سوف يتم إشعارك بمجرد انتهاء التوليدة النصية.",
    "Notify when ready error" : "حدث خطأ عند الإعلام بالجاهزية",
    "Unknown notify when ready error" : "حدث خطأ غير محدد عند الإعلام بالجاهزية",
    "The transcription could not be found. It may have been deleted." : "تعذّر إيجاد المستنسخ. يمكن أن يكون قد تمّ إلغاؤه.",
    "Record Audio" : "تسجيل صوتي",
    "Choose Audio File" : "إختَر الملف الصوتي",
    "No audio file selected" : "لم يتم تحديد أي ملف صوتي",
    "Selected Audio File:" : "الملف الصوتي المحدّد:",
    "Schedule Transcription" : "قم بجدولة عملية الاستنساخ",
    "Successfully scheduled transcription" : "تمّت بنجاح جدولة عملية الاستنساخ",
    "Failed to schedule transcription" : "تعذّرت جدولة عملية الاستنساخ",
    "Unknown API error" : "خطأ API غير محدّد",
    "Failed to schedule your task" : "تعذّرت جدولة مُهِمّتك",
    "AI Image Generation" : "توليد الصور بالذكاء الاصطناعي",
    "Show/hide advanced options" : "إظهار/إخفاء الخيارات المتقدمة",
    "Advanced options" : "الخيارات المتقدمة",
    "Preview image generation by AI" : "معاينة الصور المولدة بالذكاء الاصطناعي",
    "Submit image(s) generated by AI" : "إرسال الصورة ( أو الصور) المولدة بالذكاء الاصطناعي",
    "Send" : "أرسِل",
    "Include the prompt in the result" : "قم بتضمين المَحَثّ prompt في النتيجة",
    "Number of results" : "عدد النتائج",
    "A description of the image you want to generate" : "وصفٌ للصورة التي ترغب في توليدها",
    "Image generation cancel error" : "حدث خطأ عند إلغاء توليد الصور",
    "Unknown image generation cancel error" : "حدث خطأ غير معروف عند إلغاء توليد الصور",
    "Unexpected response from server." : "استجابة غير متوقعة من الخادوم.",
    "Image generation error" : "حدث خطأ عند توليد الصور",
    "Unknown image generation error" : "حدث خطأ غير محدد عند توليد الصور",
    "You will be notified when the image generation is ready." : "سوف يتم إعلامك عندما يجهَز توليد الصور.",
    "Copy the link to this generation to clipboard" : "إنسَخ رابط هذه التوليدة إلى الحافظة",
    "Copy link to clipboard" : "انسخ الرابط إلى الحافظة",
    "Image link copied to clipboard" : "رابط الصورة تمّ نسخه إلى الحافطة",
    "Image link could not be copied to clipboard" : "تعذّر نسخ رابط الصورة إلى الحافظة",
    "This task does not exist or has been cleaned up" : "هذه المهمة غير موجودة أو تمّ محوُها",
    "This transcript does not exist or has been cleaned up" : "هذا النّص المستنسخ غير موجود أو يمكن أن يكون قد تمّ محوُه",
    "Failed to schedule the task" : "تعذّرت جدولة المُهِمّة"
},
"nplurals=6; plural=n==0 ? 0 : n==1 ? 1 : n==2 ? 2 : n%100>=3 && n%100<=10 ? 3 : n%100>=11 && n%100<=99 ? 4 : 5;");
