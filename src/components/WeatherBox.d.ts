type WeatherData = {
    weather: {
        description: string;
    }[];
    main: {
        temp: number;
    };
};
type WeatherBoxProps = {
    weather: WeatherData | null;
};
export default function WeatherBox({ weather }: WeatherBoxProps): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=WeatherBox.d.ts.map