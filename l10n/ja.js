OC.L10N.register(
    "assistant",
    {
    "Failed to notify when ready; unknown user" : "準備完了時の通知に失敗しました;不明なユーザーです",
    "User not logged in" : "ユーザーがログインしていません",
    "User not found" : "ユーザーが見つかりません",
    "Failed to add a chat message" : "チャットメッセージを追加できませんでした",
    "Nextcloud Assistant" : "Nextcloud アシスタント",
    "Assistant task" : "アシスタントタスク",
    "AI text generation" : "AIテキスト生成",
    "AI image generation" : "AIによる画像生成",
    "AI audio transcription" : "音声文字起こしAI ",
    "AI context writer" : "文章作成AI",
    "Writing style: %1$s; Source material: %2$s" : "例文体: %1$s;  元ドキュメント: %2$s",
    "Task for \"%1$s\" has finished" : "タスク \"%1$s\" は完了しました",
    "\"%1$s\" task for \"%2$s\" has finished" : "%2$sの%1$sタスクが完了しました",
    "Input: %1$s" : "入力: %1$s",
    "Result: %1$s" : "結果 %1$s",
    "View results" : "結果を見る",
    "Task for \"%1$s\" has failed" : "タスク \"%1$s\" が失敗しました",
    "\"%1$s\" task for \"%2$s\" has failed" : "%2$sの%1$sタスクがしっぱい失敗しました",
    "View task" : "タスクを表示",
    "Generate text" : "テキスト生成",
    "Send a request to the Assistant, for example: write a first draft of a presentation, give me suggestions for a presentation, write a draft reply to my colleague." : "アシスタントのリクエストを送信する、例:「プレゼンテーションの最初稿を書いてください」「プレゼンテーションの提案をください」「私の同僚への返信の下書きを書いてください」",
    "Chat with AI" : "AIとチャット",
    "Chat with an AI model." : "AIモデルとチャット",
    "Artificial Intelligence" : "人工知能",
    "Process and transform text" : "テキストの処理と変換",
    "This app brings a user interface to use the Nextcloud text processing feature.\n\nIt allows users to launch AI tasks, be notified when they finish and see the results.\nThe assistant also appears in others apps like Text to easily process parts of a document.\n\nMore details on the assistant OCS API and frontend integration possibilities in the\n[developer doc](https://github.com/nextcloud/assistant/raw/main/docs/developer)\n\n### How to use it\n\nA new right header menu entry appears. Once clicked, the assistant is displayed and you can select and task type and\nset the input you want to process.\n\nThe task might run immediately or be scheduled depending on the time estimation given by the AI provider.\nOnce a task is scheduled, it will run as a background job. When it is finished, you will receive a notification\nfrom which the results can be displayed.\n\nOther apps can integrate with the assistant. For example, Text will display an inline button besides every paragraph\nto directly select a task type to process this paragraph. Selecting a task this way will open the assistant with the task\nbeing pre-selected and the input text set.\n\nMore details and screenshots in the [user doc](https://github.com/nextcloud/assistant/raw/main/docs/user).\n\n## Features\n\nIn the assistant, the list of available tasks depends on the available providers installed via other apps.\nThis means you have complete freedom over which service/software will actually run your AI tasks.\n\n### Text processing providers\n\nSo far, the [Local Large language model](https://github.com/nextcloud/llm2#readme)\nand the [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai) apps\ninclude text processing providers to:\n* Summarize\n* Extract topics\n* Generate a headline\n* Get an answer from a free prompt\n* Reformulate (OpenAi/LocalAi only)\n* Context writer: Generate text with a specified style. The style can be described or provided via an example text.\n\n### Text to image (Image generation)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### Speech to text (Audio transcription)\n\nKnown providers:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\nMore details on how to set this up in the [admin docs](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)" : "このアプリは、Nextcloudのテキスト処理機能を使用するためのユーザーインターフェースを提供します。\n\nユーザーはAIタスクを起動し、完了時に通知を受け取り、結果を確認することができます。アシスタントは、他のアプリ（例えば、テキスト）でも表示され、ドキュメントの一部を簡単に処理することが可能です。\n\nアシスタントのOCS APIやフロントエンド統合の詳細については[開発者向けドキュメント](https://github.com/nextcloud/assistant/raw/main/docs/developer)をご覧ください。\n\n### 使い方\n\n右上のメニューに新しい項目が表示されます。クリックすると、アシスタントが表示され、タスクの種類を選び、処理したい入力内容を設定することができます。\n\nタスクは、AIプロバイダーが提供する時間予測に応じて、即座に実行されるか、スケジュールに従って実行されます。タスクがスケジュールされると、バックグラウンドジョブとして実行されます。完了すると通知が届き、そこから結果を確認することができます。\n\n他のアプリでもアシスタントと連携できます。例えば、テキストアプリでは、各段落の横にインラインボタンが表示され、その段落に対するタスクの種類を直接選ぶことができます。この方法でタスクを選択すると、アシスタントが開き、あらかじめ選択されたタスクと入力テキストが設定されます。\n\n詳細やスクリーンショットについては[ユーザードキュメント](https://github.com/nextcloud/assistant/raw/main/docs/user)をご覧ください。\n\n## 機能\n\nアシスタントでは、利用可能なタスクのリストは他のアプリを通じてインストールされたプロバイダーに依存します。これにより、どのサービスやソフトウェアでAIタスクを実行するかを自由に選択することができます。\n\n### テキスト処理プロバイダー\n\n現在のところ、[Local Large Language Model](https://github.com/nextcloud/llm2#readme)や[OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)アプリがテキスト処理プロバイダーとして以下を提供しています：\n* 要約\n* トピックの抽出\n* 見出しの生成\n* フリープロンプトからの回答取得\n* リフォーム（OpenAi/LocalAi限定）\n* コンテキストライター: 指定されたスタイルでテキストを生成します。スタイルは説明するか、サンプルテキストを提供することで指定できます。\n\n### テキストから画像へ（画像生成）\n\n既知のプロバイダー:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Text2Image Stable Diffusion](https://apps.nextcloud.com/apps/text2image_stablediffusion)\n\n### 音声からテキストへ（音声の文字起こし）\n\n既知のプロバイダー:\n* [OpenAi/LocalAI integration](https://apps.nextcloud.com/apps/integration_openai)\n* [Local Whisper Speech-To-Text](https://apps.nextcloud.com/apps/stt_whisper)\n\n設定方法の詳細については[管理者ドキュメント](https://docs.nextcloud.com/server/latest/admin_manual/ai/index.html)をご覧ください。",
    "Find more details on how to set up Assistant and recommended backends in the Administration documentation." : "アシスタントの設定方法と推奨されるバックエンドの詳細については、管理ドキュメントを参照してください。",
    "Select which features you want to enable" : "あなたは有効したい機能を選択してください",
    "Top-right assistant" : "Top-right アシスタント",
    "To be able to use this feature, please install at least one AI text processing provider." : "この機能を使用するには、AI テキスト処理プロバイダーをインストールしてください。",
    "AI text generation smart picker" : "AIテキスト生成スマートピッカー",
    "To enable this feature, please install an AI text processing provider for the free prompt task type:" : "この機能を有効にするには、自由なプロンプトタスクを処理できるタイプのAIテキスト処理プロバイダーをインストールしてください:",
    "Text-to-image smart picker" : "テキストから画像生成スマートピッカー",
    "To enable this feature, please install a text-to-image provider:" : "この機能を有効にする場合は、text-to-imageプロバイダーをインストールしてください:",
    "Speech-to-text smart picker" : "スピーチからテキスト生成スマートピッカー",
    "To enable this feature, please install a speech-to-text provider:" : "この機能を有効にする場合は speech-to-textプロバイダーをインストールしてください:",
    "Chat User Instructions for Chat Completions" : "チャットでの生成の為のユーザーインストラクション",
    "It is passed on to the LLM for it to better understand the context." : "これは、その文脈をよりよく理解するためにLLMに渡されます。",
    "\"{user}\" is a placeholder for the user's display name." : "「{user}」はユーザーの表示名のプレースホルダーです。",
    "Chat User Instructions for Title Generation" : "タイトル生成のためのチャットユーザーインストラクション",
    "It is passed on to the LLMs to let it know what to do" : "これは、LLMが何をすべきかを知らせるためにLLMに渡されます。",
    "\"{user}\" is a placeholder for the user's display name here as well." : "「{user}」はこれもユーザーの表示名のプレースホルダーです。",
    "Last N messages to consider for chat completions" : "最後からN個のメッセージがチャットでの生成に利用されます",
    "This includes the user instructions and the LLM's messages" : "ここには、ユーザーの指示とLLMのメッセージの両方が含まれます",
    "Number of messages to consider for chat completions (excluding the user instructions, which is always considered)" : "チャットでの生成に利用されるメッセージ数（ユーザーの指示を除く。）",
    "Assistant admin options saved" : "アシスタントの管理者オプションを保存しました",
    "Failed to save assistant admin options" : "アシスタント管理者オプションの保存に失敗しました",
    "The task ran successfully but the result is identical to the input." : "タスクは正常に実行されましたが、結果は入力と同じでした。",
    "This output was generated by AI. Make sure to double-check and adjust." : "このデータはAIにより生成されました。必ずダブルチェックして調整してください",
    "Back to the assistant" : "アシスタントに戻る",
    "Previous \"{taskTypeName}\" tasks" : "前の \"{taskTypeName}\" タスク",
    "Show previous tasks" : "以前のタスクを表示する",
    "Hide advanced options" : "詳細オプションを隠す",
    "Show advanced options" : "詳細オプションを表示する",
    "Try again" : "もう一度試してください",
    "Send request" : "リクエストを送信",
    "Launch this task again" : "このタスクを再度実行する",
    "Launch a task" : "タスクを実行",
    "Close" : "閉じる",
    "Close Nextcloud Assistant" : "Nextcloudアシスタントを閉じる",
    "New conversation" : "新しい会話",
    "Delete" : "削除",
    "Edit title" : "タイトルを編集",
    "Generate title" : "タイトルを生成",
    "Hello there! What can I help you with today?" : " こんにちは！何かお手伝いできることはありますか？",
    "Try sending a message to spark a conversation." : "メッセージを送って会話を始めてみましょう。",
    "Cancel editing" : "編集をキャンセル",
    "Submit" : "提出する",
    "Type a message…" : "メッセージを入力してください...",
    "You" : "自分",
    "Delete message" : "メッセージを削除",
    "Selective context" : "選択できるコンテキスト",
    "Select Files/Folders" : "ファイル/フォルダーを選択",
    "Select Providers" : "プロバイダーを選択",
    "Choose Files/Folders" : "ファイル/フォルダーを選択",
    "Choose" : "選択",
    "Clear Selection" : "セッションクリア",
    "Error fetching default provider key" : "デフォルトのプロバイダーキーの取得エラー",
    "Error fetching providers" : "プロバイダの取得エラー",
    "No provider found" : "プロバイダが見つかりません",
    "AI Providers need to be installed to use the Assistant" : "アシスタントを使用するには AI プロバイダーをインストールする必要があります",
    "tool" : "ツール",
    "integration" : "統合",
    "complete AI documentation" : " AI ドキュメントが完成しました",
    "AI provider apps can be found in the {toolLink} and {integrationLink} app settings sections." : "AIプロバイダーアプリは{toolLink}と{integrationLink}のアプリ設定セクションで見つかりました",
    "You can also check the {aiAdminDocLink}" : " {aiAdminDocLink}からチェックできます",
    "AI image generation smart picker" : "AI画像生成スマートピッカー",
    "AI transcription smart picker" : "Ai翻訳スマートピッカー",
    "No suitable providers are available. They must first be enabled by your administrator." : "適切なプロバイダーがありません。最初にあなたの管理者に有効してもらってください",
    "Configured Backends" : "設定済みバックエンド",
    "The following services are used as backends for Nextcloud Assistant:" : "Nextcloud Assistantには以下のサービスがバックエンドとして使用されます：",
    "Assistant options saved" : "アシスタントオプションを保存しました",
    "Failed to save assistant options" : "アシスタントオプションが保存できませんでした",
    "Getting results…" : "結果を取得",
    "You will receive a notification when it has finished" : "完了通知が届きます",
    "Your task has been scheduled" : "あなたのタスクは予定済みです",
    "Nothing yet" : "まだなにもありません",
    "You have not submitted any \"{taskTypeName}\" task yet" : "あなたの{taskTypeName}タスクはまだ提出されていません",
    "Cancel" : "キャンセル",
    "Succeeded" : "成功",
    "Cancelled" : "キャンセル済",
    "Failed" : "失敗しました",
    "Running" : "ランニング",
    "Scheduled" : "予定済み",
    "Input" : "入力",
    "Result" : "結果",
    "This task is scheduled" : "このタスクは予定済みです",
    "Unknown status" : "不明なステータス",
    "_{n} image has been generated_::_{n} images have been generated_" : ["画像{n}が生成されました "],
    "_Generation of {n} image is scheduled_::_Generation of {n} images is scheduled_" : [" {n} 画像生成が予定済みです"],
    "Start recording" : "レコーディングを開始する",
    "Dismiss recording" : "録音をキャンセルする",
    "End recording and send" : "録音を終了して送信する",
    "Error while recording audio" : "音声録音中にエラーが発生しました",
    "Choose file" : "ファイルを選択",
    "Choose a file" : "ファイルを選択する",
    "No file selected" : "選択したファイルが見つかりません",
    "Upload from device" : "デバイスからアップロード",
    "Share" : "共有",
    "Could not copy to clipboard" : "クリップボードにコピーできませんでした",
    "Advanced" : "高度な",
    "Copy output" : "出力のコピー",
    "Copy" : "コピー",
    "Choose a text file" : "テキストファイルを選択する",
    "Unexpected response from text parser" : "テキストパーサーから予期されていない応答がありました",
    "Could not parse file" : "ファイルを解析ができなかったです",
    "Result could not be copied to clipboard" : "結果をクリップボードにコピーできませんでした",
    "Upload file" : "ファイルをアップロード",
    "Failed to schedule your task" : "あなたのタスクの予定が失敗しました",
    "Assistant error" : "アシスタントエラー",
    "This task does not exist or has been cleaned up" : "このタスクは存在していません。または削除されています。",
    "Failed to schedule the task" : "タスクの予定が失敗しました",
    "Failed to process prompt; unknown user" : "プロンプトの処理が失敗した;不明なユーザー",
    "Failed to get prompt history; unknown user" : "プロンプト履歴の取得に失敗しました;不明なユーザーです",
    "Failed to get outputs; unknown user" : "結果の取得が失敗した;不明なユーザー",
    "Failed to cancel generation; unknown user" : "生成のキャンセルに失敗しました; 不明なユーザー",
    "Some internal error occurred. Contact your sysadmin for more info." : "内部的なエラーが発生しました。詳細情報については、あなたのシステム管理者に連絡してください。",
    "No Speech-to-Text provider found, install one from the app store to use this feature." : "Speech-to-Text プロバイダーが無ので見つかりません。この機能を使用するには、アプリストアからプロバイダーをインストールしてください。",
    "Audio file not found." : "音声ファイルが見つかりません。",
    "No permission to create recording file/directory, contact your sysadmin to resolve this issue." : "ファイル/ディレクトリのレコーディング作成する権限がありません。この課題に関してはあなたのsysadminに連絡してください",
    "Failed to set visibility of image files; unknown user" : "画像ファイルの表示の設定が失敗しました；不明なユーザー",
    "Unknown error while retrieving prompt history." : "チャット履歴の取得中に不明なエラーが発生しました",
    "Context write" : "コンテキストを書く",
    "Writes text in a given style based on the provided source material." : "提供されたソース資料に基づいて、指定されたスタイルでテキストを作成します。",
    "Transcribe" : "書き起こす",
    "Transcribe audio to text" : "音声からテキストを書き起こす",
    "Generate image" : "画像生成",
    "Generate an image from a text" : "画像からテキストを生成する",
    "Canceled by user" : "ユーザーによってキャンセルされました",
    "FreePromptTaskType not available" : "FreePromptTaskTypeが利用できません",
    "Failed to run or schedule a task" : "タスクの実行またはスケジュールに失敗しました",
    "Failed to get prompt history" : "プロンプト履歴の取得に失敗しました",
    "Generation not found" : "生成できるデータが見つかりません",
    "Multiple tasks found" : "複数のタスクが見つかりました",
    "Transcript not found" : "トランスクリプトが見つかりません",
    "No text to image processing provider available" : "テキストから画像処理プロバイダーは利用できません",
    "Image request error" : "画像リクエストエラー",
    "Image generation not found." : "画像生成が見つかりません。",
    "Retrieving the image generation failed." : "画像生成の取得に失敗しました。",
    "Image generation failed." : "画像生成が失敗しました",
    "Image file names could not be fetched from database" : "データベースから画像ファイル名前を取得できなかったです",
    "Image file not found in database" : "データベースで画像ファイルが見つかりません",
    "Image file not found" : "画像ファイルが見つかりません",
    "To enable this feature, please install an AI text processing provider for the free prompt task type." : "この機能を有効にするには、無料のプロンプト タスク タイプ用の AI テキスト処理プロバイダーをインストールしてください。",
    "To enable this feature, please install a text-to-image provider." : "この機能を有効にする場合は、text-to-imageプロバイダーをインストールしてください。",
    "To enable this feature, please install a speech-to-text provider." : "この機能を有効にする場合は speech-to-textプロバイダーをインストールしてください",
    "Image storage" : "画像ストレージ",
    "Image generation idle time (days)" : "画像生成アイドルタイム（日）",
    "Days until generated images are deleted if they are not viewed" : "生成された画像が閲覧されなかった場合に削除された/削除されるまでの日数",
    "Writing style" : "文体",
    "Describe the writing style you want to use or supply an example document." : "使用したい文章のスタイルを教えていただけますか？それか、例となるドキュメントを提供していただければ、それに合わせて回答します",
    "Source material" : "素材",
    "Describe what you want the document to be written on." : "あなたのドキュメントないに書き込みたい内容を説明してください。",
    "Type some text" : "テキストタイプを入力",
    "Output" : "出力",
    "Copy output text to clipboard" : "出力されたテキストをクリップボードにコピー",
    "Reset the output value to the originally generated one" : "最初に生成された値にリセットします。",
    "Reset" : "リセット",
    "Text Generation" : "テキスト生成",
    "Audio transcription" : "音声の文字起こし",
    "Unknown Result Type" : "不明な結果タイプ",
    "The task ran successfully but the generated text is empty." : "タスクは正常に実行されましたが、生成されたテキストは空でした。",
    "Run a task" : "タスクを実行",
    "Edit Title" : "タイトルを編集",
    "Generate Title" : "タイトルを生成",
    "Loading messages..." : "メッセージの読み込み中...",
    "Type a message..." : "メッセージを入力中...",
    "Thinking..." : "考えています...",
    "Text generation content" : "テキスト生成コンテンツ",
    "The text generation task was scheduled to run in the background." : "テキスト生成タスクがバックグラウンドで実行されるようにスケジュールされました",
    "Estimated completion time: " : "完成予定時期: ",
    "This can take a while…" : "この処理が完了するまで少々お待ちください。。。",
    "Some generations are still being processed in the background! Showing finished generations." : "生成はまだバックグラウンドで処理中です！生成完了のデータを表示しています。",
    "Loading generations…" : "読み込み中",
    "Include prompt in the final result" : "プロンプトを最終結果に含める",
    "Unexpected server response" : "予期されていないサーバー応答",
    "The processing of generations failed." : "生成の処理が失敗しました",
    "The processing of some generations failed." : "生成の処理が失敗した",
    "Text generation error" : "テキスト生成エラー",
    "Unknown text generation API error" : "不明なテキスト生成APIエラー",
    "Prompt" : "プロンプト",
    "Result {index}" : "結果 {index}",
    "Run in the background" : "バックグラウンドで実行",
    "Record Audio" : "録音",
    "Choose Audio File" : "音声ファイルを選択する",
    "Reset recorded audio" : "登録済みの音声をリセット",
    "Stop recording" : "レコーディングを停止",
    "No audio file selected" : "選択済み音声ファイルがありません",
    "Selected Audio File:" : "選択済み音声ファイル：",
    "Choose audio file in your storage" : "ストレージから音声ファイルを選択する",
    "Choose audio File" : "音声ファイルを選択する",
    "Copy result" : "結果をコピー",
    "Audio input" : "音声入力",
    "Unknown input" : "不明な入力",
    "Running…" : "実行中...",
    "Unknown error" : "不明なエラー",
    "Task result was copied to clipboard" : "タスク結果はクリップボードにコピーされた",
    "Image generation" : "画像の生成",
    "Edit visible images" : "表示されている画像を編集する",
    "Click to toggle generation visibility" : "生成の表示を切り替えるにはクリックしてください",
    "Generated image" : "生成された画像",
    "This generation has no visible images" : "この生成には表示できる画像がありません",
    "Estimated generation time left: " : "推定残り生成時間",
    "The image(s) will be displayed here once generated." : "生成された画像(s) はここに表示されます。",
    "This image generation was scheduled to run in the background." : "この画像生成はバックグラウンドで実行されるようにスケジュールされました",
    "Image generation failed" : "画像生成が失敗しました",
    "Rate limit reached. Please try again later." : "レート制限に達成しました。もう一度試してください。",
    "Unknown server query error" : "不明なサーバークエリエラー",
    "Failed to get images" : "画像の取得に失敗しました",
    "Include the prompt in the result" : "プロンプトを結果に含めます",
    "Number of results" : "結果数",
    "Enter your question or task here:" : "質問またはタスクをここに入力する",
    "Preview text generation by AI" : "AIによるテキスト生成のプレビュー",
    "Notify when ready" : "準備が完了したら通知をする",
    "Submit text generated by AI" : "AIによって生成されたテキストを提出する",
    "Regenerate" : "再生成する",
    "Preview" : "プレビュー",
    "You will be notified when the text generation is ready." : "テキスト生成が感性してらあなたに通知を行います",
    "Notify when ready error" : "準備完了時の通知エラー",
    "Unknown notify when ready error" : "準備完了時の不明な通知エラー",
    "The task could not be found. It may have been deleted." : "タスクが見つかりません。削除されたタスクは見つかりません",
    "Schedule Transcription" : "文字起こしのスケジュールを設定する",
    "Successfully scheduled transcription" : "予定済みの文字起こしが正常に完了しました",
    "Failed to schedule transcription" : "予定トランスクリプションが失敗しました",
    "Unknown API error" : "不明なAPIのエラー",
    "Preview image generation by AI" : "AIによって生成されたプレビュー画像",
    "Submit image(s) generated by AI" : "AIが生成した画像(s)を提出する",
    "Send" : "送る",
    "Show/hide advanced options" : "詳細オプションの表示/非表示",
    "Advanced options" : "詳細オプション",
    "A description of the image you want to generate" : "あなたが生成する画像の概要",
    "Image generation cancel error" : "画像生成キャンセルエラー",
    "Unknown image generation cancel error" : "不明な画像生成キャンセルエラー",
    "Unexpected response from server." : "サーバーから予期されていない応答",
    "Image generation error" : "画像生成エラー",
    "Unknown image generation error" : "不明な画像生成エラー",
    "You will be notified when the image generation is ready." : "画像生成が完成したらあなたに通知を行います",
    "Copy the link to this generation to clipboard" : "この生成へのリンクをクリップボードにコピー",
    "Copy link to clipboard" : "リンクをクリップボードにコピーする",
    "Image link copied to clipboard" : "画像リンクがクリップボードにコピーされた",
    "Image link could not be copied to clipboard" : "画像リンクをクリップボードにコピーできませんでした"
},
"nplurals=1; plural=0;");
