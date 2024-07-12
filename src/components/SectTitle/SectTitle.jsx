import PropTypes from 'prop-types'

const SectTitle = ({title}) => {
    return (
        <div className="flex flex-col items-center mt-10 md:mt-20 ">
            <h3 className="text-3xl font-semibold  border-b-2 w-fit pb-2 px-4 border-mainColor">{title}</h3>
        </div>
    );
};

export default SectTitle;
SectTitle.propTypes={
    title:PropTypes.string
}