import { RedirectToSignIn } from "@clerk/nextjs";
import { auth, currentUser, redirectToSignIn } from "@clerk/nextjs/server"
import { db } from "./db";

type Profile = {
    id: string;
    userId: string;
    name: string;
    imageUrl: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};

export const initialProfile = async (): Promise<Profile | void> => {
    const user = await currentUser();
    if(!user){
        return auth().redirectToSignIn();
    }

    const profile = await db.profile.findUnique({
        where: {userId: user.id}
    });

    if(profile) return profile;

    const newProfile = await db.profile.create({
        data: {
            userId: user.id,
            name: `${user.firstName} ${user.lastName}`,
            imageUrl: user.imageUrl,
            email: user.emailAddresses[0].emailAddress
        }
    });

    return newProfile;
}