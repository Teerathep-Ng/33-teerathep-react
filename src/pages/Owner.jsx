import Navbar from "../components/Navbar";
import OwnerImage from '../assets/Image.png'

function Owner() {
    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="text-center max-w-4xl mx-auto mt-8">
                {/* Head box */}
                <h1 className="text-3xl font-bold text-gray-800 mb-4">
                    TEERATHEP NGAMPUKDEEKUL
                </h1>

                {/* Image box */}
                <div className="mx-auto mb-6">
                    <img src={OwnerImage} alt='OwnerImage' className="rounded-full w-72 h-64 object-cover mx-auto shadow-xl" />
                </div>

                {/* Biography box */}
                <div className="text-gray-700">
                    <h2 className="font-semibold text-xl text-gray-900 mb-2">Short Story</h2>
                    <p className="text-base leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                        The story of Teerathep Ngampukdeekul takes place in a post-cataclysmic world, fifteen years after a global disaster, in the fortified city of Neo-Tokyo-3. This futuristic city is protected by advanced technology, but it faces constant threats from mysterious beings known as Angels.
                    </p>

                    <p className="text-base leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                        Teerathep Ngampukdeekul is recruited by Gendo, his father and the leader of the secret organization Nerv, which is dedicated to protecting humanity from these Angelic threats. Teerathep is tasked with piloting Evangelion Unit-01, a giant biomechanical mecha, the last hope in humanity’s battle against the Angels.
                    </p>

                    <p className="text-base leading-relaxed text-gray-600 max-w-3xl mx-auto mb-3">
                        As Teerathep faces the immense challenges of his mission, he also struggles with his inner feelings about his identity and his strained relationship with his father. His journey becomes not only a battle to save the world but also a quest for the meaning of life in a world left in the aftermath of chaos.
                    </p>
                    
                </div>
            </div>
        </div>
    )
}

export default Owner;
