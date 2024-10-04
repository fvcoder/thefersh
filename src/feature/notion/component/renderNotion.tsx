/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { Icon } from '@iconify-icon/react';

import hlc from 'highlight.js';
import { Fragment } from 'react';

import cn from 'clsx';

export interface RenderData {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

function RenderRichText({ richText }: any) {
  if (richText.annotations.bold) {
    return <strong>{richText.plain_text}</strong>;
  }
  if (richText.annotations.italic) {
    return <i>{richText.plain_text}</i>;
  }
  if (richText.annotations.underline) {
    return <u>{richText.plain_text}</u>;
  }

  if (richText.annotations.strikethrough) {
    return <s>{richText.plain_text}</s>;
  }
  if (richText.annotations.code) {
    return <code className='px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg'>{richText.plain_text}</code>;
  }
  if (richText.text.link && richText.text.link.url) {
    return (
      <a
        href={richText.text.link.url}
        className="text-blue-400 hover:underline"
        target="_blank"
        rel="noreferrer"
      >
        {richText.plain_text}
      </a>
    );
  }

  return <Fragment>{richText.plain_text}</Fragment>;
}

export function RenderNotion(props: RenderData) {
  if (
    !props.data ||
    Object.keys(props.data as Record<string, any>).length === 0 ||
    Array.isArray(props.data)
  ) {
    return null;
  }

  if (props.data.type === 'title') {
    return (
      <>
        {props.data.title.map((x: any) => (
          <span key={x.plain_text}>{x.plain_text}</span>
        ))}
      </>
    );
  }

  if (props.data.type === 'status') {
    return (
      <div
        className="inline-flex items-center px-2 py-1 me-2 text-sm font-medium   text-blue-800 bg-blue-100 rounded"
        data-color={
          props.data.status.color === 'green'
            ? 'success'
            : props.data.status.color === 'blue'
              ? 'primary'
              : 'default'
        }
      >
        {props.data.status.name}
      </div>
    );
  }

  if (props.data.type === 'created_time') {
    return (
      <>
        {new Date(props.data.created_time as string).toLocaleString('es-BO', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        })}
      </>
    );
  }

  if (props.data.type === 'multi_select') {
    return (
      <div className="flex flex-wrap gap-1">
        {props.data.multi_select.map((x: any) => (
          <div
            key={x.id}
            className={cn(
              'border rounded-md px-2 select-none pointer-events-none',
              {
                'bg-orange-500': x.color === 'orange',
                'bg-blue-500 text-white': x.color === 'blue',
                'bg-purple-500 text-white': x.color === 'purple',
                'bg-gray-700 text-white': x.color === 'default',
                'bg-gray-500 text-white': x.color === 'gray',
                'bg-pink-500 text-white': x.color === 'pink',
                'bg-stone-600 text-white': x.color === 'brown',
                'bg-green-500 text-white': x.color === 'green',
                'bg-yellow-500 text-white': x.color === 'yellow',
              },
            )}
          >
            <small>{x.name}</small>
          </div>
        ))}
      </div>
    );
  }

  if (props.data.type === 'url') {
    return (
      <a className="text-blue-500 hover:underline" href={props.data.url}>
        {props.data.url}
      </a>
    );
  }

  if (props.data.type === 'relation') {
    return (
      <div>
        {props.data.relation.map((x: any) => (
          <a
            href={`/draft/${x.id}`}
            key={x.id}
          >
            <Icon icon="fluent:open-16-regular" />
            <span>Abrir</span>
          </a>
        ))}
      </div>
    );
  }

  if (props.data.type === 'paragraph') {
    return (
      <p>
        {props.data.paragraph.rich_text.map((x: any) => (
          <RenderRichText key={`${x.plain_text}`} richText={x} />
        ))}
      </p>
    );
  }

  if (props.data.type === 'image') {
    if (props.data.image.type === 'external') {
      return (
        <img
            src={props.data.image.external.url}
            className="w-full h-auto"
            alt={
              props.data.image.caption.length
                ? props.data.image.caption[0].plain_text
                : ''
            }
        />
      );
    }

    if (props.data.image.type === 'file') {
      return (
        <img
            src={props.data.image.file.url}
            className="w-full h-auto"
            alt={
              props.data.image.caption.length
                ? props.data.image.caption[0].plain_text
                : ''
            }
          />
      );
    }
  }

  if (props.data.type === 'divider') {
    return <hr />;
  }

  if (props.data.type === 'quote') {
    return (
      <blockquote>
        <p>
          {props.data.quote.rich_text.map((x: any) => (
            <RenderRichText key={`${x.plain_text}`} richText={x} />
          ))}
        </p>
      </blockquote>
    );
  }

  if (props.data.type === 'heading_1') {
    return (
      <h1>
        {props.data.heading_1.rich_text.map((x: any) => (
          <RenderRichText key={`${x.plain_text}`} richText={x} />
        ))}
      </h1>
    );
  }
  if (props.data.type === 'heading_2') {
    return (
      <h1>
        {props.data.heading_2.rich_text.map((x: any) => (
          <RenderRichText key={`${x.plain_text}`} richText={x} />
        ))}
      </h1>
    );
  }
  if (props.data.type === 'heading_3') {
    return (
      <h1>
        {props.data.heading_3.rich_text.map((x: any) => (
          <RenderRichText key={`${x.plain_text}`} richText={x} />
        ))}
      </h1>
    );
  }

  if (props.data.type === 'bulleted_list_item') {
    return (
      <ul>
        <li>
          {props.data.bulleted_list_item.rich_text.map((x: any) => (
            <RenderRichText key={`${x.plain_text}`} richText={x} />
          ))}
        </li>
      </ul>
    );
  }

  if (props.data.type === 'callout') {
    return (
      <div className="p-4 bg-green-100 rounded-md flex items-start gap-2">
        <div>
          {props.data.callout.icon.type === 'emoji' ? (
            props.data.callout.icon.emoji
          ) : (
            <img
              src={props.data.callout.icon.file.url}
              width={16}
              height={16}
            />
          )}
        </div>
        <div className="flex-1">
          {props.data.callout.rich_text.map((x: any) => (
            <RenderRichText key={`${x.plain_text}`} richText={x} />
          ))}
        </div>
      </div>
    );
  }

  if (props.data.type === 'table') {
    // console.log(props.data);
    const columns = Array.from({ length: props.data.table.table_width }).map(
      (_, i) => ({ key: String(i) }),
    );

    const rows = props.data.tableChildren.map((y: any) => {
      const newData: Record<string, any> = {
        id: y.id,
      };

      y.table_row.cells.forEach((x: any, index: number) => {
        newData.key = String(index);
        newData[`cell_${index}`] = x[0] ?? {};
      });

      return newData;
    });

    return (
      <div className="not-prose">
        <table aria-label="Table">
          <thead>
            {columns.map((column) => (
              <th key={column.key}>
                {props.data.tableChildren[0]
                  ? props.data.tableChildren[0].table_row.cells[
                      Number(column.key)
                    ][0].plain_text
                  : ''}
              </th>
            ))}
          </thead>
          <tbody >
            {(rows ?? []).map((item: any) => {
              return (
                <td key={item.id}>
                  ss
                </td>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }

  if (props.data.type === 'text') {
    return (
      <p>
        <RenderRichText richText={props.data} />
      </p>
    );
  }

  if (props.data.type === 'code') {
    const plainHtml = props.data.code.rich_text.map((code: any) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      const result = hlc.highlight((code.plain_text as string) ?? '', {
        language:
          props.data.code.language !== 'plain text'
            ? props.data.code.language
            : 'text',
      });

      return result.value;
    });

    return (
      <Fragment>
        {plainHtml.map((html: any, i: number) => (
          <pre key={`code-section-${i}`}>
            <code
              className={`hljs language-${props.data.code.language} rounded-xl`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </pre>
        ))}
      </Fragment>
    );
  }

  return null;
}
