import { PieChart } from 'react-minimal-pie-chart';
import { determineUserTier } from '../../functions/generalFunctions';
type profileType = {
	userInfo: any;
	currentTheme?: any;
};
const UserProfile = ({ userInfo, currentTheme }: profileType) => {
	const { userName, level, points } = userInfo;
	const { textColor, backgroundColor } = currentTheme;

	const userTierColor = determineUserTier(level);
	return (
		<div className="content_container">
			<div className="profile_container">
				<h1 className="profile_userName">
					{userName}' profile{' '}
					<span className="tier" style={{ backgroundColor: userTierColor }}>
						{level}
					</span>
				</h1>
				<div className="profileContent_container">
					<section className="profileStats_container">
						<div className="pieChart_container">
							<PieChart
								animate={true}
								startAngle={-45}
								animationDuration={900}
								data={[
									{ title: 'Lower Than', value: 10, color: userTierColor },
									{ title: 'Higher Than', value: 90, color: backgroundColor },
								]}
							/>
						</div>
						<h2>You have a higher score than 87% people</h2>
						<h1>
							Your current score is:<span> {points}</span>
						</h1>
						<div>points to next level chart</div>
						<h2>2000 points to the next level</h2>
					</section>
					<aside className="profileWorkouts_container"></aside>
				</div>
			</div>
		</div>
	);
};
export default UserProfile;
