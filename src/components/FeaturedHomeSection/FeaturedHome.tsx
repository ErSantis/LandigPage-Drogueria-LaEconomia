
import FeaturedProduct from "./FeaturedProduct"
import { FeturedSections } from "../../data/featuredSection.data"
const FeaturedHome = () => {

    return (
        <div className="h-33 w-full bg-white flex items-center gap-2 px-40 mt-4">
            {FeturedSections.map((section, index) => (
                <FeaturedProduct key={index} title={section.title} image={section.image} />
            ))}
        </div>
    )
}
export default FeaturedHome