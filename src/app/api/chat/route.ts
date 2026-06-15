import { google } from "@ai-sdk/google"
import { convertToModelMessages, streamText, type UIMessage } from "ai"

export const maxDuration = 30

const SYSTEM_PROMPT = `Tu es l'assistant IA d'EZK Agency, une agence spécialisée dans le design, la création de sites web et d'applications, le marketing, la vidéo et l'événementiel.
Services : Stratégie de marque, Conception UX/UI, Développement Web & Mobile, Marketing Digital & SEO, Production Vidéo, Gestion Événementielle.
Contact : # (Le numéro ou email n'est pas fourni, demande à l'utilisateur d'utiliser le formulaire de contact).
Réponds dans la langue de l'utilisateur (français ou anglais), de façon concise et professionnelle. Si tu ne sais pas, propose de contacter l'agence directement via le formulaire de contact ou demander un devis.`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: google("gemini-2.5-flash"),
    system: SYSTEM_PROMPT,
    messages: await convertToModelMessages(messages),
  })

  return result.toTextStreamResponse()
}
