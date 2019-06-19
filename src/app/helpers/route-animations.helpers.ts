import {
	trigger,
	transition,
	style,
	query,
	group,
	animateChild,
	animate,
	keyframes,
} from '@angular/animations';

// export const fader =
// 	trigger('routeAnimations', [
// 		transition('* <=> *', [
// 			query(':enter, :leave', [
// 				style({
// 					position: 'absolute',
// 					top: 0,
// 					left: 0,
// 					width: '100%',
// 					opacity: 0,
// 					background: 'red',
// 					transform: 'scale(0) translatey(100%)'
// 				})
// 			]),
// 			query(':enter', [
// 				animate('600ms ease',
// 					style({
// 						opacity: 1,
// 						transform: 'scale(1) translateY(0)'
// 					})
// 				)
// 			])
// 		])
// 	]);


// export const slider =
// 	trigger('routeAnimations', [
// 		transition('* => isLeft', slideTo('left')),
// 		transition('* => isRight', slideTo('right')),
// 		transition('isLeft => *', slideTo('left')),
// 		transition('isRight => *', slideTo('right'))
// 	]
// 	);

// function slideTo(direction) {
// 	const optional = { optional: true };
// 	return [
// 		query(':enter, :leave', [
// 			style({
// 				width: '100%',
// 				maxWidth: '1000px',
// 				margin: 'auto',
// 				position: 'absolute',
// 				top: 0,
// 				[direction]: 0,
// 				opacity: 1
// 			})
// 		], optional),
// 		query(':enter', [
// 			style({ [direction]: '-100%', opacity: 0 })
// 		]),
// 		group([
// 			query(':leave', [
// 				animate('1s ease', style({ [direction]: '100%', opacity: 0 }))
// 			], optional),
// 			query(':enter', [
// 				animate('1s ease', style({ [direction]: '0%', opacity: 1 }))])
// 		])
// 	]

// }

export const myTransition =
	trigger('routeAnimations', [

		transition('* => isRight', [
			style({ height: '!' }),
			query(':enter', [
				style({ transform: 'translateX(100%)' })
			]),
			query(':enter, :leave', [
				style({ position: 'absolute', top: 0, left: 0, right: 0, padding: '4em 0' })
			]),
			group([
				query(':leave', [
					animate('0.3s ease', style({ transform: 'translateX(-100%)', opacity: 0 }))
				], { optional: true }),
				query(':enter', [
					animate('0.3s ease', style({ transform: 'translateX(0)' }))
				])
			])
		]),

		transition('* => isLeft', [
			style({
				height: '!',
			}),
			query(':enter', [
				style({ transform: 'translateX(-100%)', opacity: 0 })
			]),
			query(':enter, :leave', [
				style({ position: 'absolute', top: 0, left: 0, right: 0, padding: '4em 0' })
			]),
			group([
				query(':leave', [
					animate('0.3s ease', style({ transform: 'translateX(100%)', opacity: 0 }))
				], { optional: true }),
				query(':enter', [
					animate('1s ease', style({ transform: 'translateX(0)', opacity: 1 }))
				])
			])
		]),

		transition('* => isBottom', [
			style({
				height: '!',
			}),
			query(':enter', [
				style({ transform: 'translateY(100%)', opacity: 0 })
			]),
			query(':enter, :leave', [
				style({ position: 'absolute', top: 0, left: 0, right: 0, padding: '4em 0' })
			]),
			group([
				query(':leave', [
					animate('1s ease', style({ transform: 'translateY(-100%)', opacity: 0 }))
				], { optional: true }),
				query(':enter', [
					animate('1s ease', style({ transform: 'translateY(0)', opacity: 1 }))
				])
			])
		]),

	]);