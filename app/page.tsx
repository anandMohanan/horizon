import { Metadata } from "next";
import { HomePageContent } from "./(homepage)/home";
import { validateUser } from "@/lib/validateuser";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Esoteric Network",
    description: "Esoteric Network is a digital frontier for explorers of the esoteric and extraordinary. Created as a haven for unconventional thinkers, we offer a platform where visionaries, philosophers, and artists converge to share their unique perspectives.",
    metadataBase: new URL("https://www.esotericnetwork.site/"),
    twitter: {
        card: "summary_large_image",
    },
    openGraph: {
        title: "Esoteric Network",
        description: "Post writings, art, and philosophies. Connect, comment, and support fellow seekers on their spiritual journeys.",
        url: "https://www.esotericnetwork.site/",
        siteName: "Esoteric Network",
        images: [
            "https://utfs.io/f/251a43ed-c221-45a0-94a4-2ef0491cc040-b0fwsy.png"
        ],
        type: "website",
    },
    applicationName: "Esoteric Network",
    referrer: "origin-when-cross-origin",
    keywords: ["horizon", "esoteric", "writing", "art", "philosophy", "spirituality", "mysticism", "philosopher", "writer", "artist", "poet", "philosophies", "esotericism", "mysticism", "spiritual", "writings", "art", "poem"]
};


export default async function Home() {
    const { user } = await validateUser()
    if (user) {
        redirect("/home")
    }
    return (
        <HomePageContent />
    );
}
