
type RightBorderCardPropType = {
    year: string,
    title: string,
    content: string
}

function RightBorderCard({ year, title, content }: RightBorderCardPropType) {
    return (
        <div className="border-l-4 border-[#ffc653] pl-4 py-2 section-experience">
            <p className="text-gray-500">{ year }</p>
            <p className="text-pink font-bold text-xl">{ title }</p>
            <p>{ content }</p>
        </div>
    )
}

export default RightBorderCard
