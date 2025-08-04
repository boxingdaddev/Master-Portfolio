# Adam Makhyoun – Mobile Developer Portfolio

Cross-platform mobile developer specializing in **React Native** and **Expo**, building apps from concept to deployment on both **iOS and Android**.

---

## Featured Projects

### [Flipping 99](https://github.com/boxingdaddev/Flipping99-Mobile-APP)
Flashcard app to memorize the 99 Names of Allah.

- **Tech:** React Native, Expo, AsyncStorage
- **Platforms:** [Google Play](YOUR-PLAY-STORE-LINK) | [App Store](YOUR-APP-STORE-LINK)
- **Highlights:** Shuffle mode, bookmarking, progress tracking, cross-platform deployment

---

### [AI Flashcards](https://github.com/ai-flashcards)
AI-powered flashcard generator and study tool.

- **Status:** In development
- **Tech:** React Native, Expo, OpenAI API
- **Planned Features:** AI-generated decks, spaced repetition, cross-device sync

---

### [Real-Time Chat App] (Planned Capstone)
Real-time chat application for group messaging and study collaboration.

- **Status:** Planned
- **Tech (Planned):** React Native, Expo, Firebase/Socket.io
- **Focus:** Real-time messaging, presence indicators, simple responsive UI

---

## Skills

- **Languages:** JavaScript, TypeScript
- **Frameworks:** React Native, Expo
- **Deployment:** Google Play Store, Apple App Store
- **Other Tools:** AsyncStorage, API integration, Firebase/Supabase (planned)

---

## Contact

- **GitHub:** [github.com/boxingdaddev](https://github.com/boxingdaddev)
- **Email:** adamscope@gmail.com

---

## Project Structure

- Root README (this file) documents portfolio + featured projects.
- `/site` contains Next.js app (dark mode, Tailwind).

## Local Development

```bash
cd site
npm install
npm run dev
```

Video Previews
Convert & Add a Looping Demo Video

Use ffmpeg to compress and loop any video for project previews:

ffmpeg -stream_loop 2 -i "/path/to/source.mp4" \
-vf "scale=480:-2" -t 15 \
-c:v libx264 -preset slow -crf 28 \
-c:a aac -b:a 64k \
"$HOME/Master-Portfolio/site/public/images/<project>-demo.mp4"

    Replace <project> with your project name (e.g., flipping99-demo.mp4)

    Video will loop 3 times (about 15s) and scale to 480px wide

    Place alongside PNG fallback:
    site/public/images/<project>-placeholder.png



## Deployment

1. Push this repo to GitHub.
2. Import into [Vercel](https://vercel.com) and set **Root Directory** to `site`.
3. Deploy (Vercel auto-detects Next.js).

