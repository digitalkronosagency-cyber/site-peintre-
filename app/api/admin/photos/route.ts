import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";
import { addPhoto, deletePhoto, listPhotos } from "@/lib/blob-photos";

const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp"];
const MAX_SIZE_BYTES = 8 * 1024 * 1024;

export async function GET() {
  const photos = await listPhotos();
  return NextResponse.json({ photos });
}

export async function POST(request: NextRequest) {
  const formData = await request.formData().catch(() => null);
  if (!formData) {
    return NextResponse.json({ error: "Requête invalide." }, { status: 400 });
  }

  const file = formData.get("file");
  const alt = formData.get("alt");

  if (!(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Aucune photo reçue." }, { status: 400 });
  }

  if (!ALLOWED_TYPES.includes(file.type)) {
    return NextResponse.json(
      { error: "Format non supporté. Utilisez JPEG, PNG ou WebP." },
      { status: 400 }
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json(
      { error: "La photo dépasse la taille maximale de 8 Mo." },
      { status: 400 }
    );
  }

  if (typeof alt !== "string" || !alt.trim()) {
    return NextResponse.json(
      { error: "Merci de décrire la photo (texte alternatif)." },
      { status: 400 }
    );
  }

  try {
    const photo = await addPhoto(file, alt.trim());
    revalidatePath("/");
    return NextResponse.json({ photo });
  } catch (error) {
    console.error("Admin photos : échec de l'upload.", error);
    return NextResponse.json({ error: "Échec de l'envoi de la photo." }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  const body = await request.json().catch(() => null);
  const url = typeof body?.url === "string" ? body.url : "";

  if (!url) {
    return NextResponse.json({ error: "URL de photo manquante." }, { status: 400 });
  }

  try {
    await deletePhoto(url);
    revalidatePath("/");
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Admin photos : échec de la suppression.", error);
    return NextResponse.json({ error: "Échec de la suppression." }, { status: 500 });
  }
}
