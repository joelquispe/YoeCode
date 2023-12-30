import React from 'react';
interface IProps {
	link: string;
	children: React.ReactNode;
}
const CompContainerSocialNetwork = (props: IProps) => {
	return (
		<a href={props.link} target='_blank' className="text-primary text-7xl scale-infinite">
			{props.children}
		</a>
	);
};

export default CompContainerSocialNetwork;
