import React from 'react';

import Navbar from 'components/Navbars/AuthNavbar';
import Footer from 'components/Footers/Footer';

const About = () => {
    return (
        <>
            <Navbar transparent />
            <main className="profile-page">
                <section className="relative block h-500-px">
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url(${'../assets/img/hero.jpg'})`,
                            /* 'url(' +
                                require('../assets/img/hero.jpg') +
                                ')' */
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                        style={{ transform: 'translateZ(0)' }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={' '}
                                                className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                                        Kita Company Inc.
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>{' '}
                                        Leipzig, Germany
                                    </div>
                                    <div className="mb-2 text-gray-700 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                                        Food services
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                Lorem ipsum dolor sit amet
                                                consectetur adipisicing elit.
                                                Molestias tempora neque iste
                                                voluptate ad autem iure
                                                voluptatem ex assumenda, harum
                                                numquam ab mollitia minus
                                                tenetur possimus a ipsum velit
                                                nobis? In iusto ex tempora
                                                cupiditate sapiente voluptas
                                                corporis esse ipsam pariatur
                                                tempore quo ratione explicabo
                                                deserunt cum doloremque minus,
                                                repudiandae repellendus unde
                                                provident nemo optio similique
                                                voluptates! Maxime, modi vel?
                                                Beatae officiis perspiciatis
                                                sunt, incidunt nobis perferendis
                                                fuga sint voluptas architecto
                                                eius id cupiditate iure
                                                excepturi! Delectus ducimus
                                                provident nemo accusamus sint
                                                impedit natus laudantium. Modi
                                                similique dolorem velit? Quis.
                                                Quaerat molestias nisi possimus
                                                atque est, culpa harum quibusdam
                                                iste incidunt dolore dolorum
                                                odio repellendus sunt officiis
                                                error quisquam aliquam nostrum
                                                optio expedita, saepe ab? Illo
                                                reiciendis possimus saepe
                                                perferendis! Aut maxime
                                                accusamus veniam, quo incidunt
                                                labore reiciendis repudiandae
                                                quod aliquam, doloribus mollitia
                                                aliquid officiis sunt laborum
                                                doloremque, neque rem totam
                                                expedita hic velit. Quisquam
                                                veritatis eligendi tenetur hic
                                                mollitia? Nostrum, eos sapiente
                                                ipsam commodi saepe cumque
                                                magnam voluptate quaerat
                                                consectetur aperiam at est cum
                                                sed dignissimos accusantium
                                                provident. Doloremque sit magni
                                                repellat tempore, saepe sed
                                                rerum veritatis accusantium ad.
                                                Iusto ab nam tempora, facilis
                                                officia saepe voluptates
                                                voluptatibus voluptas quaerat
                                                ipsa eum hic fugiat autem
                                                delectus deserunt nemo
                                                consequuntur minima, non
                                                voluptate impedit nisi. Quos
                                                adipisci nemo maiores impedit?
                                                Mollitia id harum velit fugiat
                                                sapiente eveniet, voluptatem qui
                                                esse voluptatibus quo corporis
                                                dicta natus cum quam assumenda!
                                                Repudiandae sunt quis enim, quo
                                                error dignissimos distinctio? In
                                                quis exercitationem vitae. Eaque
                                                harum modi consequuntur ut ex
                                                explicabo laudantium? Aut, quo
                                                ullam? Officia corrupti sit
                                                repudiandae magnam, quae vel
                                                officiis provident, placeat,
                                                suscipit tenetur nostrum ex
                                                voluptas consequatur modi ea
                                                maiores. Ex doloremque a amet
                                                autem itaque delectus in,
                                                reiciendis, facilis, ratione
                                                vero qui eveniet veritatis velit
                                                deleniti vitae necessitatibus.
                                                Similique explicabo hic eius
                                                ipsam, et sed excepturi deserunt
                                                tempore esse? Assumenda totam
                                                explicabo illum blanditiis saepe
                                                obcaecati labore. Quibusdam modi
                                                neque, hic, fugit accusamus
                                                aperiam eligendi explicabo nobis
                                                expedita libero dicta vero
                                                placeat suscipit incidunt! Eum
                                                odit ullam sed debitis. Dolorum
                                                placeat rerum, et voluptatibus
                                                obcaecati harum maiores ea
                                                reprehenderit ex pariatur
                                                quibusdam expedita at illum iure
                                                dolor. Explicabo autem omnis
                                                veritatis alias eum in aperiam,
                                                tempora totam dicta aut!
                                                Adipisci vitae cupiditate
                                                accusantium explicabo tenetur
                                                asperiores qui voluptate dolores
                                                ipsum, sequi illum quidem animi
                                                quas quae alias placeat quam
                                                aperiam fugiat. Quidem itaque
                                                modi debitis ullam hic odio
                                                iure. Vero, velit deserunt.
                                                Perspiciatis esse doloribus
                                                deleniti amet alias ad explicabo
                                                eligendi error nesciunt cum
                                                corporis eos, voluptas,
                                                blanditiis pariatur quae
                                                asperiores aliquid iste eum hic,
                                                inventore dolore. Officiis,
                                                veniam. Tempora ipsum minus
                                                earum corrupti sequi praesentium
                                                et harum dicta sunt sit,
                                                necessitatibus repellendus quia
                                                dolorum vitae dignissimos
                                                impedit maxime, nobis dolores
                                                quaerat natus laboriosam sed.
                                                Perspiciatis ipsa neque odio!
                                                Aliquid, reiciendis natus
                                                expedita optio corporis fugiat
                                                voluptates atque, aperiam dicta
                                                quis repellat rem, quibusdam
                                                corrupti ea adipisci
                                                reprehenderit laudantium impedit
                                                laborum! Ad quae libero ut,
                                                dolor deserunt perferendis
                                                repellat? Dolorem, porro
                                                perferendis! Distinctio quidem
                                                earum voluptatem, animi velit
                                                temporibus nihil iusto sint
                                                voluptatibus veritatis obcaecati
                                                ab labore vel dolorem fugit
                                                commodi hic. Reprehenderit
                                                eveniet ducimus odit, nam eaque
                                                molestiae? Mollitia quod eum et,
                                                voluptas quae porro fugiat quia
                                                est itaque quos quisquam odio
                                                quas numquam dolorem minima
                                                nulla! Doloremque asperiores ex
                                                ullam consectetur, nemo quis
                                                similique vitae obcaecati cum?
                                                Repudiandae eum excepturi
                                                necessitatibus velit cumque
                                                repellat, quis aperiam, aliquid
                                                officia incidunt aliquam nobis
                                                voluptatum, veritatis nulla.
                                                Incidunt sequi fugiat eius
                                                repudiandae suscipit hic aut
                                                perferendis ipsam, unde,
                                                excepturi officia! Assumenda
                                                placeat voluptatum odio dolores
                                                explicabo quas reiciendis
                                                minima, dolorum non quod. Harum,
                                                quae? Ratione modi odit alias
                                                minus hic. Possimus
                                                necessitatibus quae autem quos
                                                reprehenderit quia laboriosam
                                                corporis provident?
                                            </p>
                                            <a
                                                href="/#"
                                                className="font-normal text-blue-500"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
};

export default About;
