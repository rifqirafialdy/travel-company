import Header from "@/Components/Header";
import TeamsHead from "@/Components/Teams";
import TeamsList from "@/Components/Teams/TeamsList";

export default function Teams(){
    return(
        <div>
            <Header/>
            <TeamsHead/>
         <TeamsList/>
        </div>
    )
}