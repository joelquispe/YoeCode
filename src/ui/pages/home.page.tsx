import {
	RiDiscordFill,
	RiFacebookBoxFill,
	RiInstagramFill,
	RiWhatsappFill,
	RiYoutubeFill,
	RiTiktokFill,
} from 'react-icons/ri';

import CompContainerSocialNetwork from '../components/container-socialNetwork.comp';

const HomePage = () => {
	return (
		<div className="pt-10 bg-slate-950 h-screen flex flex-col items-center justify-center w-screen  ">
			<h1 className="font-bold text-5xl lg:text-7xl text-secondary ">
				YoeCode
			</h1>
			<p className="text-white font-medium text-center text-lg w-10/12 lg:w-8/12 mt-11">
				Hola, soy creador de contenido y desarrollador, me gusta compartir mis
				conocimientos y ayudar a los demás así que por eso trato de hacer el
				mejor contenido posible, estudie en instituto pero la mayor parte lo
				aprendí de forma autodidacta, espero te guste el contenido y no te
				olvides de seguirme en mis redes, exitos.
			</p>
			<img src={'/img/logo.png'} width={500} alt="" />
			<div className="grid grid-cols-2 sm:flex gap-8 lg:gap-10 mt-16 lg:pb-0">
				<CompContainerSocialNetwork link="https://www.facebook.com/YoeCode">
					<RiFacebookBoxFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://api.whatsapp.com/send?phone=51960765839&text=%F0%9F%98%80">
					<RiWhatsappFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.instagram.com/j0el_quispe/">
					<RiInstagramFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://discord.gg/VpghnBF3Nh">
					<RiDiscordFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.youtube.com/channel/UCj2FWnuPMQDm4Rg9z_1mPoA">
					<RiYoutubeFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.tiktok.com/@yoecode">
					<RiTiktokFill />
				</CompContainerSocialNetwork>
			</div>
    <div className='h-[150px]'></div>
			<a
				href="https://api.whatsapp.com/send?phone=51960765839&text=%F0%9F%98%80"
				className="scale-infinite rounded-lg absolute right-0 bottom-0 mb-4 mr-4 bg-slate-900 w-[260px] h-28 p-3 shadow-2xl "
			>
				<div className="flex gap-1">
					<div className="text-2xl text-green-600">
						<RiWhatsappFill />
					</div>

					<h1 className="text-white">Clases privadas y proyectos</h1>
				</div>

				<div className="bg-white w-full h-14 rounded-lg mt-2 p-1">
					<p className="text-sm">Hola, Quiero información sobre ..</p>
				</div>
			</a>
		</div>
	);
};
export default HomePage;
