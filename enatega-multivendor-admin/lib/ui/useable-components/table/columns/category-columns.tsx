import { IActionMenuProps, ICategory } from '@/lib/utils/interfaces';
import ActionMenu from '../../action-menu';
import { Dispatch, SetStateAction } from 'react';
import TextIconClickable from '../../text-icon-clickable';
import { faAdd } from '@fortawesome/free-solid-svg-icons';
import { useTranslations } from 'next-intl';

export const CATEGORY_TABLE_COLUMNS = ({
  menuItems,
  setIsAddSubCategoriesVisible,
}: {
  menuItems: IActionMenuProps<ICategory>['items'];
  setIsAddSubCategoriesVisible: Dispatch<
    SetStateAction<{
      bool: boolean;
      parentCategoryId: string;
    }>
  >;
}) => {
  // Hooks
  const t = useTranslations();

  return [
    { headerName: t('Title'), propertyName: 'title' },

    {
      propertyName: 'actions',
      body: (rider: ICategory) => {
        return (
          <div className="flex justify-between items-center">
            <div>
              <TextIconClickable
                icon={faAdd}
                onClick={() =>
                  setIsAddSubCategoriesVisible({
                    bool: true,
                    parentCategoryId: rider._id,
                  })
                }
                title={t('Add Sub-Category')}
                className="border border-gray-400 border-dashed"
              />
            </div>
            <ActionMenu items={menuItems} data={rider} />
          </div>
        );
      },
    },
  ];
};
