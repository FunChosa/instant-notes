import React from "react";
import {
  MdOutlineEdit,
  MdOutlineDelete,
  MdOutlinePushPin,
  MdPushPin,
} from "react-icons/md";
import moment from "moment";

const Card = ({
  title,
  content,
  color,
  date,
  isPinned,
  onEdit,
  onDelete,
  onPin,
}) => {
  return (
    <div className="rounded p-4 h-[150px]" style={{ backgroundColor: color }}>
      <div className="flex items-center justify-between">
        <div>
          <h6 className="text-sm font-medium text-white">{title}</h6>
          <span className="text-xs text-gray-100">
            {moment(date).format("Do MMM YYYY h:mm A")}
          </span>
          <p className="text-xs text-white mt-2">
            {content.length > 50 ? content?.slice(0, 50) + "..." : content}
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end mt-2">
        <div className="flex items-center gap-2">
          {isPinned ? (
            <MdPushPin
              className="icon-btn cursor-pointer hover:text-white transition-colors duration-200"
              onClick={onPin}
            />
          ) : (
            <MdOutlinePushPin
              className="icon-btn cursor-pointer hover:text-white transition-colors duration-200"
              onClick={onPin}
            />
          )}
          <MdOutlineEdit
            className="icon-btn cursor-pointer hover:text-white transition-colors duration-200"
            onClick={onEdit}
          />

          <MdOutlineDelete
            className="icon-btn cursor-pointer hover:text-white transition-colors duration-200"
            onClick={onDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
