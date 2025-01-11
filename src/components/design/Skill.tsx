export function Skill({ skill, gradientStartHex }: { skill: string, gradientStartHex: string }) {
    return (
        <p
            className="text-gradient bg-gradient-to-b"
            style={{ backgroundImage: `linear-gradient(180deg, #C0C0C0 0%, #${gradientStartHex} 100%)` }}
        >
            {skill}
        </p>
    )
}