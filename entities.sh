#!/usr/bin/env bash
set -e

ORIGIN="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
echo "[ENTITIES.SH] IS IN: ${ORIGIN}"
cd $ORIGIN

echo "[START] COPYING ENTITIES"
ln -s $ORIGIN/entities $ORIGIN/backend/src/entities
ln -s $ORIGIN/entities $ORIGIN/web/src/app/entities
echo "[END] COPYING ENTITIES"