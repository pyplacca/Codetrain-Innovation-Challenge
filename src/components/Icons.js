function Svg({
	size = "var(--icon-size)",
	color = "#000",
	children,
	outlined = false,
	style = {},
	className,
	...props
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			style={{
				width: size,
				height: size,
				...style
			}}
			fill={color}
			className={`app-icon ${outlined ? "outlined" : ""} ${className || ""}`}
			{...props}
		>
			{children}
		</svg>
	);
}

export const Bell = (props) => {
	return (
		<Svg viewBox="0 0 20.925 25.502" {...props}>
			<path
				d="M14.463,28a2.623,2.623,0,0,0,2.616-2.616H11.847A2.615,2.615,0,0,0,14.463,28Zm7.847-7.847V13.616c0-4.015-2.145-7.376-5.885-8.265V4.462a1.962,1.962,0,0,0-3.923,0v.889c-3.753.889-5.885,4.237-5.885,8.265v6.539L4,22.771v1.308H24.925V22.771Z"
				transform="translate(-4 -2.5)"
			/>
		</Svg>
	);
};

export const Cart = (props) => {
	return (
		<Svg viewBox="0 0 25.503 25.502" {...props}>
			<path
				d="M8.651,22.4a2.55,2.55,0,1,0,2.55,2.55A2.547,2.547,0,0,0,8.651,22.4ZM1,2V4.55H3.55l4.59,9.678L6.419,17.352A2.465,2.465,0,0,0,6.1,18.577a2.558,2.558,0,0,0,2.55,2.55h15.3v-2.55H9.186a.316.316,0,0,1-.319-.319l.038-.153,1.148-2.078h9.5a2.538,2.538,0,0,0,2.231-1.313l4.565-8.276a1.246,1.246,0,0,0,.153-.612A1.279,1.279,0,0,0,25.227,4.55H6.368L5.17,2H1ZM21.4,22.4a2.55,2.55,0,1,0,2.55,2.55A2.547,2.547,0,0,0,21.4,22.4Z"
				transform="translate(-1 -2)"
			/>
		</Svg>
	);
};

export const Settings = (props) => {
	return (
		<Svg viewBox="0 0 26.397 26.969" {...props}>
			<path
				d="M23.694,15.708a9.729,9.729,0,0,0,.087-1.224,9.73,9.73,0,0,0-.087-1.223l2.634-2.06a.63.63,0,0,0,.15-.8l-2.5-4.32a.628.628,0,0,0-.762-.275L20.11,7.056A9.122,9.122,0,0,0,18,5.833l-.474-3.308A.609.609,0,0,0,16.914,2H11.921a.609.609,0,0,0-.612.524l-.474,3.308a9.592,9.592,0,0,0-2.11,1.224L5.616,5.808a.609.609,0,0,0-.762.275l-2.5,4.32a.616.616,0,0,0,.15.8l2.634,2.06a9.9,9.9,0,0,0-.087,1.224,9.9,9.9,0,0,0,.087,1.224l-2.634,2.06a.63.63,0,0,0-.15.8l2.5,4.32a.628.628,0,0,0,.762.275l3.109-1.248a9.121,9.121,0,0,0,2.11,1.224l.474,3.308a.609.609,0,0,0,.612.524h4.994a.609.609,0,0,0,.612-.524L18,23.137a9.592,9.592,0,0,0,2.11-1.224l3.109,1.248a.609.609,0,0,0,.762-.275l2.5-4.32a.63.63,0,0,0-.15-.8Zm-9.276,3.146a4.37,4.37,0,1,1,4.37-4.37A4.374,4.374,0,0,1,14.417,18.854Z"
				transform="translate(-1.212 -1)"
			/>
		</Svg>
	);
};

export const Home = (props) => {
	return (
		<Svg viewBox="0 0 25.502 21.677" {...props}>
			<path
				d="M12.2,24.677V17.026h5.1v7.651h6.376v-10.2H27.5L14.751,3,2,14.476H5.825v10.2Z"
				transform="translate(-2 -3)"
			/>
		</Svg>
	);
};

export const Profile = (props) => {
	return (
		<Svg viewBox="0 0 26.895 26.895" {...props}>
			<path
				d="M16.448,16.448a6.224,6.224,0,1,0-6.224-6.224A6.222,6.222,0,0,0,16.448,16.448Zm0,3.112C12.293,19.56,4,21.645,4,25.783V28.9H28.9V25.783C28.9,21.645,20.6,19.56,16.448,19.56Z"
				transform="translate(-3 -3)"
			/>
		</Svg>
	);
};

export const VisibilityOn = (props) => {
	return (
		<Svg viewBox="0 0 22 15" {...props}>
		  <path
		  	d="M12,4.5A11.827,11.827,0,0,0,1,12a11.817,11.817,0,0,0,22,0A11.827,11.827,0,0,0,12,4.5ZM12,17a5,5,0,1,1,5-5A5,5,0,0,1,12,17Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,12,9Z"
		  	transform="translate(-1 -4.5)"
		  />
		</Svg>
	)
}

export const VisibilityOff = (props) => {
	return (
		<Svg viewBox="0 0 21.99 19" {...props}>
		  <path
		  	d="M12,7a5,5,0,0,1,5,5,4.853,4.853,0,0,1-.36,1.83l2.92,2.92A11.817,11.817,0,0,0,22.99,12a11.827,11.827,0,0,0-11-7.5,11.645,11.645,0,0,0-3.98.7l2.16,2.16A4.853,4.853,0,0,1,12,7ZM2,4.27,4.28,6.55l.46.46A11.8,11.8,0,0,0,1,12a11.822,11.822,0,0,0,15.38,6.66l.42.42L19.73,22,21,20.73,3.27,3ZM7.53,9.8l1.55,1.55A2.821,2.821,0,0,0,9,12a3,3,0,0,0,3,3,2.821,2.821,0,0,0,.65-.08l1.55,1.55A4.967,4.967,0,0,1,7.53,9.8Zm4.31-.78,3.15,3.15.02-.16a3,3,0,0,0-3-3Z"
		  	transform="translate(-1 -3)"
		  />
		</Svg>
	)
}
