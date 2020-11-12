import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Canvas from '../views/Canvas.vue';
import Image from '../views/Image.vue';
import Path from '../views/Path.vue';
import Animate from '../views/Animate.vue';
import Text from '../views/Text.vue';
import Group from '../views/Group.vue';

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/Canvas",
		name: "Canvas",
		component: Canvas,
	},
	{
		path: "/Image",
		name: "Image",
		component: Image,
	},
	{
		path: "/Path",
		name: "Path",
		component: Path,
	},
	{
		path: "/Animate",
		name: "Animate",
		component: Animate,
	},
	{
		path: "/Text",
		name: "Text",
		component: Text,
	},
	{
		path: "/Group",
		name: "Group",
		component: Group,
	},
	{
		path: "/about",
		name: "About",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/About.vue"),
	},
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
