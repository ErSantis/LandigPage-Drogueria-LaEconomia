
import { Link } from 'react-router-dom';
import { footerData } from '../../data/footerData';

const Footer = () => {
    return (
        <div className='w-full h-auto bg-white py-4 px-4 py-4 md:px-10 md:py-5'>
            <div className='w-full h-auto gap-8 flex'>
                {footerData.map((section, index) => (
                    <div key={index} className='w-[170px] flex flex-col gap-2'>
                        <h6 className='text-xl font-bold'>{section.title}</h6>
                        {section.links.map((link, linkIndex) => {


                            return (
                                <Link
                                    key={linkIndex}
                                    to={link.to}
                                    className={`text-sm font-normal hover:underline ${link.breakWords ? 'break-words' : ''
                                        }`}
                                >
                                    {link.text}
                                </Link>
                            );
                        })}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Footer;