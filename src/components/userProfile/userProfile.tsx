import { PieChart } from 'react-minimal-pie-chart';
import { useState, useEffect } from 'react';
import { determineUserTier } from '../../functions/generalFunctions';
type profileType = {
	userInfo: any;
	currentTheme?: any;
};
const UserProfile = ({ userInfo, currentTheme }: profileType) => {
	const { userName, level, points, workouts } = userInfo;
	const [currentPoints, setCurrentPoints] = useState(0);
	const [progressBar, setProgressBar] = useState(0);
	const { backgroundSvg, backgroundColor, textColor } = currentTheme;
	const userTierColor = determineUserTier(level);

	useEffect(() => {
		let id: any;
		if (currentPoints != points) {
			id = setInterval(() => {
				setCurrentPoints(currentPoints + 1);
			}, 10);
		}

		return () => {
			clearInterval(id);
		};
	}, [currentPoints]);

	useEffect(() => {
		let id = setTimeout(() => {
			setProgressBar(60);
		}, 1000);

		return () => {
			clearTimeout(id);
		};
	}, []);

	const renderUserStats = () => {
		return (
			<section className="profileStats_container">
				<div className="userPieChartContainer">
					<div className="pieChart">
						<PieChart
							animate={true}
							startAngle={-75}
							animationDuration={900}
							data={[
								{ title: 'Lower Than', value: 10, color: userTierColor },
								{ title: 'Higher Than', value: 90, color: backgroundColor },
							]}
						/>
					</div>
					<h2>You have a higher score than 87% people</h2>
				</div>

				<h1 className="currentPoints">
					Your current score is:
					<span style={{ backgroundColor }}> {currentPoints}</span>
				</h1>
				<div className="progressBar_container">
					<h2>2000 points to the next level</h2>
					<div className="progressBar" style={{ backgroundColor: textColor }}>
						<div
							className="bar"
							style={{
								width: `${progressBar}%`,
								background: `url(${backgroundSvg})`,
							}}
						></div>
					</div>
				</div>
			</section>
		);
	};

	const renderUserWorkouts = () => {
		return (
			<aside className="profileWorkouts_container" style={{ backgroundColor }}>
				{workouts.map((workout: any, index: number) => {
					const { name, exercises } = workout;
					return (
						<div key={index}>
							<h1>Name: {name}</h1>
							<div>
								{exercises.map((exercise: any, i: number) => {
									const { exerciseName, reps, sets, weight } = exercise;
									return (
										<h1 key={i}>
											<span>{exerciseName}</span>-<span>{reps}</span>x
											<span>{sets}</span>-<span>{weight}</span>kg
										</h1>
									);
								})}
							</div>
						</div>
					);
				})}
			</aside>
		);
	};

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
					{renderUserStats()}
					{renderUserWorkouts()}
				</div>
			</div>
		</div>
	);
};
export default UserProfile;
