import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";
import { redirect } from "next/navigation";

type Profile = {
    id: string;
    userId: string;
    name: string;
    imageUrl: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
};

const SetupPage = async () => {
    const profile = await initialProfile() as Profile;

    const server = await db.server.findFirst({
        where:{
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    });

    if(server){
        redirect(`/servers/${server.id}`);
    }

    return <InitialModal />
}
 
export default SetupPage;