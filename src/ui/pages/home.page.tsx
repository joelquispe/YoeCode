import {
	RiDiscordFill,
	RiFacebookBoxFill,
	RiInstagramFill,
	RiWhatsappFill,
	RiYoutubeFill,
	RiTiktokFill,
	RiTwitchFill,
	RiKickFill,
	RiGithubFill,
	RiGitlabFill,
} from 'react-icons/ri';

import CompContainerSocialNetwork from '../components/container-socialNetwork.comp';

const HomePage = () => {
	return (
		<div className=" bg-slate-950 min-h-screen  flex flex-col items-center justify-center w-screen  ">
			<h1 className="font-bold text-5xl lg:text-7xl text-secondary ">
				YoeCode
			</h1>
			<p className="text-white font-medium text-center text-lg w-10/12 lg:w-8/12 mt-11 mb-10">
				Hola, soy creador de contenido y desarrollador, me gusta compartir mis
				conocimientos y ayudar a los demás, estudie en instituto pero la mayor parte lo
				aprendí de forma autodidacta, espero te guste el contenido y gracias por el apoyo, exitos.
			</p>

			<div className="grid grid-cols-2  gap-8 sm:gap-14 sm:grid-cols-3 lg:flex lg:gap-10  lg:pb-0 ">
				<CompContainerSocialNetwork link="https://www.facebook.com/YoeCode">
					<RiFacebookBoxFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://wa.link/puppim">
					<RiWhatsappFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.instagram.com/yoecode/">
					<RiInstagramFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://discord.gg/bag7jNrGtx">
					<RiDiscordFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.youtube.com/channel/UCj2FWnuPMQDm4Rg9z_1mPoA">
					<RiYoutubeFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.tiktok.com/@yoecode">
					<RiTiktokFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://www.twitch.tv/yoecode">
					<RiTwitchFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://kick.com/yoecode">
					<RiKickFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://github.com/joelquispe">
					<RiGithubFill />
				</CompContainerSocialNetwork>
				<CompContainerSocialNetwork link="https://gitlab.com/jquispe">
					<RiGitlabFill />
				</CompContainerSocialNetwork>
			</div>

			<a
				href="https://wa.link/puppim"
				className="scale-infinite rounded-lg  sm:absolute right-0 bottom-0  bg-slate-900 w-[260px] h-28 p-3 shadow-2xl  "
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
// https://api.whatsapp.com/send?phone=51960765839&text=Hola%20quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20sobre%20
export default HomePage;
