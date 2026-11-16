# Start Deutsch 1 Trainer

Free, offline flashcard and exercise app for the Goethe-Zertifikat A1 (Start Deutsch 1), with English hints.

It includes:
- 648 cards: nouns, verbs, adjectives and adverbs, phrases, and Lesson 12.1.
- 11 exercise types and 102 grammar rule cards.
- A speaking tutor ("Anna") with 7 guided role-plays: the three parts of the A1 speaking exam plus café, appointment and directions. You answer by microphone or keyboard and always get a model sentence. The microphone needs internet and works best in Chrome on Android; on iPhone use the microphone key on the keyboard.
- German pronunciation, using the phone's built-in voice.
- Spaced repetition with **FSRS**, via the open-source [ts-fsrs](https://github.com/open-spaced-repetition/ts-fsrs) library (MIT). It shows four buttons: Nochmal, Schwer, Gut and Leicht.
- Optional account: progress sync across devices and free AI conversation with the tutor. This needs the free server described in `SERVER-SETUP.md` in the `server` folder of the zip; without it the app works fully on the device.
- Offline use. A service worker stores the whole app on the device.
- Progress saved on the device, with backup and restore as a file or a copy-and-paste code.

## Publish for free with GitHub Pages
1. Create a free account at github.com.
2. Click **+ → New repository**:
   - Name it, for example `deutsch-a1`.
   - Set it to **Public**.
   - Click **Create**.
3. Click **uploading an existing file**. Drag in **everything inside the `app` folder**: `index.html`, `sw.js`, `manifest.webmanifest`, the `icons` and `fonts` folders, and this README. Then click **Commit changes**.
4. Go to **Settings → Pages**:
   - Under *Branch*, choose **main** and **/(root)**.
   - Click **Save**.
5. Wait 1–2 minutes. The app is then live at `https://YOUR-NAME.github.io/deutsch-a1/`.

## Or: Netlify Drop
1. Go to https://app.netlify.com/drop.
2. Drag this whole folder onto the page.
3. Create a free account to keep the site. Without an account, it is deleted after a short time.

## Install on your phone
- **Android (Chrome):** open the link, then tap **Installieren** on the start page, or use the menu **⋮ → App installieren**.
- **iPhone (Safari):** open the link, then tap **Share → Zum Home-Bildschirm**.

## Updating
Upload the new files over the old ones. The app picks up the new version the next time it opens with internet.

## Keep your progress safe
Progress is stored only on the device.
- On the start page, use **Fortschritt sichern → Als Datei speichern** now and then.
- To move to another phone, use **Code erstellen** and **Code übernehmen**.
