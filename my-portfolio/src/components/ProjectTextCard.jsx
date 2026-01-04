function ProjectTextCard({ Title, Date, Description, darkMode }) {
    return (
        <div className="self-start pt-10 space-y-4 lg:order-1 order-2">
            <h3 className={`text-2xl font-semibold ${darkMode ? "text-green-400" : "text-green-500"}`}>{Title}</h3>
            <p className={`${darkMode ? "text-purple-300" : "text-purple-800"} text-sm`}>
                {Date}
            </p>
            <p className={`${darkMode ? "text-gray-300" : "text-gray-800"}`}>
                {Description}
            </p>
        </div>
    );
}

export default ProjectTextCard;
