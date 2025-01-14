import { StatProps } from "./EngineeringProjectCard"

export function Stat({ index, name, value, iconURI }: StatProps & { index: number }) {
    return (
        <div
            className={`pl-4 ${index !== 0 ? `border-l border-white3` : `border-l border-white3`}`}
        >
            <p className="text-white3">{name}</p>
            <div className="flex gap-1 items-center">
                <p className="-mb-[1px]">{value}</p>
                <img
                    src={`/icons/${iconURI}`}
                    alt={`Icon ${iconURI.split('.')[0]}`}
                    className="h-4"
                />
            </div>
        </div>
    )
}