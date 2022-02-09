import userInfo from './mockData.json';

export const ROUTES = {
	HOME: '/',
	TIMER: '/timer',
	CRONOMETER: '/cronometer',
	MY_WORKOUTS: '/my-workouts',
	USER_PROFILE: `/${userInfo.userId}`,
};
