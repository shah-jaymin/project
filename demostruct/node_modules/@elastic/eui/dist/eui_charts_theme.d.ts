declare module '@elastic/eui/dist/eui_charts_theme' {
	import { PartialTheme, LineAnnotationStyle } from '@elastic/charts';
	export interface EuiChartThemeType {
	    lineAnnotation: LineAnnotationStyle;
	    theme: PartialTheme;
	}
	export const EUI_CHARTS_THEME_LIGHT: EuiChartThemeType;
	export const EUI_CHARTS_THEME_DARK: EuiChartThemeType;
	export const EUI_SPARKLINE_THEME_PARTIAL: PartialTheme;

}
