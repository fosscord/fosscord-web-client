import React, { useEffect } from "react";
import { RootState, useSelector } from "react-redux";
import { Route, Switch, useHistory } from "react-router-dom";
import SideBar from "../components/SideBar/SideBar";
import { connectAccount } from "../actions";
import "./general.scss";

const NotFound = React.lazy(() => import("../pages/NotFound"));

export default function HomeScreen(props: any) {
	const history = useHistory();
	const accounts = useSelector((state: RootState) => state.accounts);
	useEffect(() => {
		if (!accounts.length) history.push("/login");
	});

	if (!accounts.length) {
		return <></>;
	}

	// @ts-ignore
	accounts.forEach(connectAccount);

	return (
		<Switch>
			<Route path="/">
				<div className="page root">
					<SideBar></SideBar>
				</div>
			</Route>
			<Route component={NotFound}></Route>
		</Switch>
	);
}
