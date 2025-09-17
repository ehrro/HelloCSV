'use client';

import Importer, { ImporterState } from 'hello-csv/react';
import 'hello-csv/react/index.css';

export default function Home() {
  const onComplete = async (
    data: ImporterState,
    onProgress: (progress: number) => void
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(20);
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(50);
    await new Promise((resolve) => setTimeout(resolve, 200));
    onProgress(100);
    console.log(data);
  };

  return (
    <div className="flex max-h-[800px] w-full bg-white p-8 pb-20 text-black">
      <Importer
        maxFileSizeInBytes={10 * 1024 * 1024} // 10MB
        sheets={[
          {
            id: 'products',
            label: 'Products',
            columns: [
              {
                label: 'Product ID',
                id: 'product_id',
                type: 'string',
                validators: [{ validate: 'unique' }],
                isReadOnly: true,
              },
              {
                label: 'Name',
                id: 'name',
                type: 'string',
                validators: [{ validate: 'required' }],
              },
              { label: 'SKU', id: 'prod_sku', type: 'string' },
              { label: 'Barcode', id: 'prod_barcode', type: 'string' },
              {
                label: 'Active',
                id: 'active',
                type: 'number',
                validators: [
                  {
                    validate: 'regex_matches',
                    regex: '^(0|1)$',
                    error: 'Must be 0 or 1',
                  },
                ],
              },
              {
                label: 'Tags',
                id: 'tags',
                type: 'enum',
                typeArguments: {
                  values: [
                    { label: 'adults', value: 'adults' },
                    { label: 'age_3_6', value: 'age_3_6' },
                    { label: 'age_7', value: 'age_7' },
                    { label: 'black', value: 'black' },
                    { label: 'blue', value: 'blue' },
                    { label: 'brush_heads', value: 'brush_heads' },
                    {
                      label: 'brush_heads_no_sub',
                      value: 'brush_heads_no_sub',
                    },
                    { label: 'coral', value: 'coral' },
                    { label: 'electric', value: 'electric' },
                    { label: 'free_shipping', value: 'free_shipping' },
                    { label: 'games_sub', value: 'games_sub' },
                    { label: 'green', value: 'green' },
                    { label: 'hardware', value: 'hardware' },
                    {
                      label: 'includes_free_month',
                      value: 'includes_free_month',
                    },
                    { label: 'kids', value: 'kids' },
                    { label: 'manual', value: 'manual' },
                    { label: 'medium', value: 'medium' },
                    { label: 'mint', value: 'mint' },
                    { label: 'navy', value: 'navy' },
                    { label: 'no_sub', value: 'no_sub' },
                    { label: 'orange', value: 'orange' },
                    { label: 'pink', value: 'pink' },
                    { label: 'red', value: 'red' },
                    { label: 'smart', value: 'smart' },
                    { label: 'smart_blue', value: 'smart_blue' },
                    { label: 'smart_one', value: 'smart_one' },
                    { label: 'smart_sonic', value: 'smart_sonic' },
                    { label: 'soft', value: 'soft' },
                    { label: 'subscription', value: 'subscription' },
                    { label: 'tooth_paste', value: 'tooth_paste' },
                    { label: 'toothbrush', value: 'toothbrush' },
                    { label: 'ultrasoft', value: 'ultrasoft' },
                    { label: 'uvp', value: 'uvp' },
                    { label: 'one_time', value: 'one_time' },
                    { label: 'gum', value: 'gum' },
                    { label: 'juniors', value: 'juniors' },
                    { label: 'gift', value: 'gift' },
                    { label: 'mouthwash', value: 'mouthwash' },
                    { label: 'floss', value: 'floss' },
                    { label: 'interdental', value: 'interdental' },
                    { label: 'test', value: 'test' },
                    { label: 'page_playbrush', value: 'page_playbrush' },
                    { label: 'page_smart', value: 'page_smart' },
                    { label: 'page_upsell', value: 'page_upsell' },
                    { label: 'page_smart_one', value: 'page_smart_one' },
                    { label: 'age_3_plus', value: 'age_3_plus' },
                    { label: 'age_6_plus', value: 'age_6_plus' },
                    {
                      label: 'page_adults_upsell',
                      value: 'page_adults_upsell',
                    },
                    { label: 'page_smart_upsell', value: 'page_smart_upsell' },
                    {
                      label: 'page_playbrush_upsell_no_trial',
                      value: 'page_playbrush_upsell_no_trial',
                    },
                    {
                      label: 'page_smart_upsell_no_trial',
                      value: 'page_smart_upsell_no_trial',
                    },
                    { label: 'basis_set', value: 'basis_set' },
                    {
                      label: 'page_playbrush_gift',
                      value: 'page_playbrush_gift',
                    },
                    { label: 'page_smart_gift', value: 'page_smart_gift' },
                    { label: 'soft_picks', value: 'soft_picks' },
                    {
                      label: 'tooth_paste_sample',
                      value: 'tooth_paste_sample',
                    },
                    { label: 'trial_6_month', value: 'trial_6_month' },
                    {
                      label: 'page_smart_one_x_upsell',
                      value: 'page_smart_one_x_upsell',
                    },
                    {
                      label: 'adults_upsell_products',
                      value: 'adults_upsell_products',
                    },
                    { label: 'periobalance', value: 'periobalance' },
                    {
                      label: 'playbrush_crosssell_products',
                      value: 'playbrush_crosssell_products',
                    },
                    { label: 'page_kids_upsell', value: 'page_kids_upsell' },
                    {
                      label: 'page_family_upsell',
                      value: 'page_family_upsell',
                    },
                    { label: 'page_playbrush_it', value: 'page_playbrush_it' },
                    {
                      label: 'adult_upsell_products',
                      value: 'adult_upsell_products',
                    },
                  ],
                },
                validators: [
                  {
                    validate: 'multi_includes',
                    values: [
                      'adults',
                      'age_3_6',
                      'age_7',
                      'black',
                      'blue',
                      'brush_heads',
                      'brush_heads_no_sub',
                      'coral',
                      'electric',
                      'free_shipping',
                      'games_sub',
                      'green',
                      'hardware',
                      'includes_free_month',
                      'kids',
                      'manual',
                      'medium',
                      'mint',
                      'navy',
                      'no_sub',
                      'orange',
                      'pink',
                      'red',
                      'smart',
                      'smart_blue',
                      'smart_one',
                      'smart_sonic',
                      'soft',
                      'subscription',
                      'tooth_paste',
                      'toothbrush',
                      'ultrasoft',
                      'uvp',
                      'one_time',
                      'gum',
                      'juniors',
                      'gift',
                      'mouthwash',
                      'floss',
                      'interdental',
                      'test',
                      'page_playbrush',
                      'page_smart',
                      'page_upsell',
                      'page_smart_one',
                      'age_3_plus',
                      'age_6_plus',
                      'page_adults_upsell',
                      'page_smart_upsell',
                      'page_playbrush_upsell_no_trial',
                      'page_smart_upsell_no_trial',
                      'basis_set',
                      'page_playbrush_gift',
                      'page_smart_gift',
                      'soft_picks',
                      'tooth_paste_sample',
                      'trial_6_month',
                      'page_smart_one_x_upsell',
                      'adults_upsell_products',
                      'periobalance',
                      'playbrush_crosssell_products',
                      'page_kids_upsell',
                      'page_family_upsell',
                      'page_playbrush_it',
                      'adult_upsell_products',
                    ],
                    delimiter: ',',
                    error: 'Invalid tag(s) found',
                  },
                ],
              },
              { label: 'Image', id: 'image', type: 'string' },
              { label: 'Description', id: 'description', type: 'string' },
              { label: 'Product Type', id: 'product_type', type: 'string' },
              {
                label: 'Product Category',
                id: 'product_category',
                type: 'string',
              },
              { label: 'Product Brand', id: 'product_brand', type: 'string' },
              {
                label: 'Product Revenue Category',
                id: 'product_revenue_category',
                type: 'string',
              },
              {
                label: 'Product Attributes',
                id: 'product_attributes',
                type: 'string',
              },
              { label: 'Product Pages', id: 'product_pages', type: 'string' },
            ],
          },
          {
            id: 'product_translations',
            label: 'Product Translations',
            columns: [
              {
                label: 'ID',
                id: 'id',
                type: 'number',
                validators: [{ validate: 'unique' }],
              },
              { label: 'Language', id: 'language', type: 'string' },
              { label: 'Country', id: 'country', type: 'string' },
              { label: 'Product ID', id: 'product_id', type: 'string' },
              { label: 'Description', id: 'description', type: 'string' },
              {
                label: 'Images',
                id: 'images',
                type: 'enum',
                typeArguments: {
                  values: [],
                },
              },
              { label: 'Order Title', id: 'prod_order_title', type: 'string' },
              {
                label: 'Marketing Title',
                id: 'prod_marketing_title',
                type: 'string',
              },
              { label: 'Image Title', id: 'prod_image_title', type: 'string' },
              {
                label: 'Image Corner Note',
                id: 'prod_image_corner_note',
                type: 'string',
              },
              {
                label: 'Image Tooltip Text',
                id: 'prod_image_tooltip_text',
                type: 'string',
              },
            ],
          },
          {
            id: 'product_prices',
            label: 'Product Prices',
            columns: [
              {
                label: 'ID',
                id: 'id',
                type: 'number',
                validators: [{ validate: 'unique' }],
              },
              { label: 'Currency', id: 'currency', type: 'string' },
              { label: 'Country', id: 'country', type: 'string' },
              { label: 'Product ID', id: 'product_id', type: 'string' },
              { label: 'Product SKU', id: 'product_sku', type: 'string' },
              {
                label: 'Current Price',
                id: 'price_amount_current',
                type: 'number',
              },
              {
                label: 'Crossed Price',
                id: 'price_amount_crossed',
                type: 'number',
              },
              {
                label: 'Recurring Interval',
                id: 'recurring_interval',
                type: 'string',
              },
              {
                label: 'Recurring Interval Count',
                id: 'recurring_interval_count',
                type: 'number',
              },
              {
                label: 'Trial Period Days',
                id: 'recurring_trial_period_days',
                type: 'number',
              },
              {
                label: 'Create Bundle With Product Data',
                id: 'create_bundle_with_product_data',
                type: 'number',
                validators: [
                  {
                    validate: 'regex_matches',
                    regex: '^(0|1)$',
                    error: 'Must be 0 or 1',
                  },
                ],
                transformers: [
                  {
                    transformer: 'custom',
                    key: 'boolean_to_number',
                    transformFn: (value) => {
                      return value === 1 ? 'True' : 'False';
                    },
                  },
                ],
              },
            ],
          },
          {
            id: 'bundles',
            label: 'Bundles',
            columns: [
              {
                label: 'Bundle ID',
                id: 'bundle_id',
                type: 'string',
                validators: [{ validate: 'unique' }],
              },
              { label: 'Name', id: 'name', type: 'string' },
              { label: 'Image', id: 'image', type: 'string' },
              {
                label: 'Image Subscription',
                id: 'image_subscription',
                type: 'string',
              },
              { label: 'Index', id: 'index', type: 'number' },
              {
                label: 'Is Crossed Price Visible',
                id: 'is_crossed_price_visible',
                type: 'number',
                validators: [
                  {
                    validate: 'regex_matches',
                    regex: '^(0|1)$',
                    error: 'Must be 0 or 1',
                  },
                ],
              },
              {
                label: 'Active',
                id: 'active',
                type: 'number',
                validators: [
                  {
                    validate: 'regex_matches',
                    regex: '^(0|1)$',
                    error: 'Must be 0 or 1',
                  },
                ],
              },
              { label: 'Product Pages', id: 'product_pages', type: 'string[]' },
            ],
          },
          {
            id: 'bundle_prices',
            label: 'Bundle Prices',
            columns: [
              {
                label: 'ID',
                id: 'id',
                type: 'number',
                validators: [{ validate: 'unique' }],
              },
              { label: 'Currency', id: 'currency', type: 'string' },
              { label: 'Country', id: 'country', type: 'string' },
              { label: 'Bundle ID', id: 'bundle_id', type: 'string' },
              { label: 'Product ID', id: 'product_id', type: 'string' },
              {
                label: 'Current Price',
                id: 'price_amount_current',
                type: 'number',
              },
              {
                label: 'Crossed Price',
                id: 'price_amount_crossed',
                type: 'number',
              },
              {
                label: 'Recurring Interval',
                id: 'recurring_interval',
                type: 'string',
              },
              {
                label: 'Recurring Interval Count',
                id: 'recurring_interval_count',
                type: 'number',
              },
              {
                label: 'Trial Period Days',
                id: 'recurring_trial_period_days',
                type: 'number',
              },
            ],
          },
          {
            id: 'bundle_translations',
            label: 'Bundle Translations',
            columns: [
              {
                label: 'ID',
                id: 'id',
                type: 'number',
                validators: [{ validate: 'unique' }],
              },
              { label: 'Language', id: 'language', type: 'string' },
              { label: 'Country', id: 'country', type: 'string' },
              { label: 'Images', id: 'images', type: 'string[]' },
              { label: 'Name Order', id: 'name_order', type: 'string' },
              { label: 'Name Marketing', id: 'name_marketing', type: 'string' },
              { label: 'Description', id: 'description', type: 'string' },
              { label: 'Bundle ID', id: 'bundle_id', type: 'string' },
              { label: 'Product ID', id: 'product_id', type: 'string' },
            ],
          },
          {
            id: 'tags',
            label: 'Tags',
            columns: [
              {
                label: 'ID',
                id: '_id',
                type: 'string',
                validators: [{ validate: 'unique' }],
              },
              {
                label: 'Name',
                id: 'name',
                type: 'string',
                validators: [{ validate: 'required' }, { validate: 'unique' }],
              },
              {
                label: 'Active',
                id: 'active',
                type: 'number',
                validators: [
                  { validate: 'required' },
                  {
                    validate: 'regex_matches',
                    regex: '^(0|1)$',
                    error: 'Must be 0 or 1',
                  },
                ],
                transformers: [
                  {
                    transformer: 'custom',
                    key: 'boolean_to_number',
                    transformFn: (value) => {
                      return value === 1 ? 'True' : 'False';
                    },
                  },
                ],
              },
              {
                label: 'Created At',
                id: 'created_at',
                type: 'string',
                validators: [
                  {
                    validate: 'custom',
                    key: 'friendly_date',
                    validateFn: (value) => {
                      if (!value) return 'Date is required';
                      const date = new Date(value);
                      if (isNaN(date.getTime())) return 'Invalid date format';
                      return null;
                    },
                  },
                ],
                transformers: [
                  {
                    transformer: 'custom',
                    key: 'friendly_date',
                    transformFn: (value) => {
                      return new Date(value as string).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      });
                    },
                  },
                ],
              },
              {
                label: 'Updated At',
                id: 'updated_at',
                type: 'string',
                validators: [
                  {
                    validate: 'custom',
                    key: 'friendly_date',
                    validateFn: (value) => {
                      if (!value) return 'Date is required';
                      const date = new Date(value);
                      if (isNaN(date.getTime())) return 'Invalid date format';
                      return null;
                    },
                  },
                ],
                transformers: [
                  {
                    transformer: 'custom',
                    key: 'friendly_date',
                    transformFn: (value) => {
                      return new Date(value as string).toLocaleString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: '2-digit',
                        hour: '2-digit',
                        minute: '2-digit',
                      });
                    },
                  },
                ],
              },
              { label: 'Description', id: 'description', type: 'string' },
            ],
          },
        ]}
        onDataColumnsMapped={(dataColumns) => {
          return dataColumns;
        }}
        onComplete={onComplete}
        preventUploadOnValidationErrors
        persistenceConfig={{
          enabled: true,
        }}
      />
    </div>
  );
}
