import Initiativecomment from './initiative-comment';
import InitiativeSideBar from './initiative-sidebar';

const InitiativeDetailsContainer = ({ initiative }) => {
	if (!initiative) {
		return <div>Initiative not found</div>;
	}
	return (
		<>
			<div className='initiative__details section-padding'>
				<div className='container'>
					<div className='row'>
						<Initiativecomment initiativeData={initiative} />
						{/* <InitiativeSideBar /> */}
					</div>
				</div>
			</div>
		</>
	);
};

export default InitiativeDetailsContainer;
