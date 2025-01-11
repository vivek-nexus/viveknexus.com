import { StatProps } from "./EngineeringProjectCard"

export function Stat({ index, name, value, iconURI }: StatProps & { index: number }) {
    return (
        <div
            className={`pl-4 ${index !== 0 ? `border-l border-[#666666]` : `border-l border-[#666666]`}`}
        >
            <p className="text-[#666666]">{name}</p>
            <div className="flex gap-1 items-center">
                <p>{value}</p>
                <img
                    src={`/icons/${iconURI}`}
                    className={`h-4 ${iconURI !== "user.svg" ? `mb-1` : `mb-0`}`}
                />
            </div>
        </div>
    )
}