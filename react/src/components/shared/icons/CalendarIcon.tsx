import SvgIcon from "@mui/material/SvgIcon";

const CalendarIcon = ({ width = '10px', height = '10px' }: any) => {

  // const style = isLeft ? { rotate: '180deg', marginRight: '10px' } : { rotate: '0deg', marginLeft: '10px' };

  return (
    <>
      <SvgIcon sx={{ height, width }}>
        <svg x="0px" y="0px" viewBox="0 0 24 24" >
          <g transform="translate(0, 0)" fill="none">
            <polyline fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" points="23,9 23,23 1,23 1,9 " stroke-linejoin="miter"></polyline>
            <rect x="1" y="3" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="22" height="6" stroke-linejoin="miter"></rect>
            <line fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" x1="12" y1="1" x2="12" y2="5" stroke-linejoin="miter"></line>
            <line fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" x1="6" y1="1" x2="6" y2="5" stroke-linejoin="miter"></line>
            <line fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" x1="18" y1="1" x2="18" y2="5" stroke-linejoin="miter"></line>
            <rect data-color="color-2" x="5" y="13" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="2" height="1" stroke-linejoin="miter"></rect>
            <rect data-color="color-2" x="11" y="13" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="2" height="1" stroke-linejoin="miter"></rect>
            <rect data-color="color-2" x="5" y="18" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="2" height="1" stroke-linejoin="miter"></rect>
            <rect data-color="color-2" x="11" y="18" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="2" height="1" stroke-linejoin="miter"></rect>
            <rect data-color="color-2" x="17" y="13" fill="none" stroke="currentColor" vector-effect="non-scaling-stroke" stroke-linecap="square" stroke-miterlimit="10" width="2" height="1" stroke-linejoin="miter"></rect>
            <rect data-color="color-2" data-stroke="none" x="5" y="13" fill="none" width="2" height="1" stroke-linejoin="miter" stroke-linecap="square"></rect>
            <rect data-color="color-2" data-stroke="none" x="11" y="13" fill="none" width="2" height="1" stroke-linejoin="miter" stroke-linecap="square"></rect>
            <rect data-color="color-2" data-stroke="none" x="5" y="18" fill="none" width="2" height="1" stroke-linejoin="miter" stroke-linecap="square"></rect>
            <rect data-color="color-2" data-stroke="none" x="11" y="18" fill="none" width="2" height="1" stroke-linejoin="miter" stroke-linecap="square"></rect>
            <rect data-color="color-2" data-stroke="none" x="17" y="13" fill="none" width="2" height="1" stroke-linejoin="miter" stroke-linecap="square"></rect>
          </g>
        </svg>
      </SvgIcon>
    </>
  );
}
export default CalendarIcon;