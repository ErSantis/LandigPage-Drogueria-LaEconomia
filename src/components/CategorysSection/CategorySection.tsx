import { categorys } from "../../data/category.data";
import CategoryInf from "./CategoryInf";

const CategorySection = () => {
    return (
        <div className="grid grid-cols-1 gap-5 xmd:grid-cols-3">
            {categorys.map((category) => (
                <div key={category.id}>
                    <CategoryInf category={category} />
                </div>
            ))}

        </div>
    );
};

export default CategorySection;
