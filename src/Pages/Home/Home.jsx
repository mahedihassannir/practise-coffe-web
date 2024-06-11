import { useEffect, useState } from "react";
import Avengers from "../../Components/Avengers/HomeComponents/Avengers";
import CodeWorms from "../../Components/CodeWorms/CodeWorms";
import TeamArrow from "../../Components/TeamArrow/TeamArrow";

const Home = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    useEffect(() => {
        setModalIsOpen(true);
    }, []);

    const closeModal = () => {
        setModalIsOpen(false);
    };
    return (
        <div className="">
            {/* banner section starts  team codehubs */}
            <section>
                <Avengers>
                </Avengers>
            </section>
            {/* banner section ends */}
            
            {/* ------------------------------------------------- */}

            {/* team arrow starts */}
            <section>
                <TeamArrow>
                </TeamArrow>
            </section>
            {/* 2nd banner section ends */}

            {/* ------------------------------------------------- */}

            {/* team cidewoms starts */}

            <section>
                <CodeWorms>
                </CodeWorms>
            </section>

            {/* team cidewoms ends */}
        </div>
    );
};
export default Home;