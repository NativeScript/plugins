<template>
    <Page class="page">
        <ActionBar class="action-bar">
            <Label class="action-bar-title" text="Image Picker"></Label>
        </ActionBar>

        <GridLayout rows="*, auto, auto">
            <ListView @itemLoading="onItemLoading" for="item in imageAssets" :visibility="isSingleMode?'collapsed':'visible'">
                <v-template>
                    <GridLayout columns="auto, *">
                        <Image width="80" height="80" :src="item" stretch="aspectFill" />
                        <Label class="m-10" id="imageLabel" col="1" />
                    </GridLayout>
                </v-template>
            </ListView>
            <Image :src="imageSrc" :visibility="isSingleMode?'visible':'collapsed'" :width="previewSize" :height="previewSize" stretch="aspectFit" />
            <Button row="1" text="Pick Single" @tap="onSelectSingleTap" horizontalAlignment="center" />
            <Button row="2" text="Pick Multiple" @tap="onSelectMultipleTap" horizontalAlignment="center" />
        </GridLayout>
    </Page>
</template>

<script>
    import { Observable, ItemEventData, Label } from '@nativescript/core';
    import * as imagepicker from "@nativescript/imagepicker";

    export default {
        data() {
            return {
                isSingleMode: true,
                imageAssets: [],
                imageSrc: null,
                previewSize: 300,
                thumbSize: 80,
                thumbSize: null
            }
        },
        methods: {
            onSelectSingleTap: function(e) {
                this.isSingleMode = true;
                let context = imagepicker.create({ mode: "single" });
                this.startSelection(context);
            },
            onSelectMultipleTap: function() {
                this.isSingleMode = false;
                let context = imagepicker.create({
                    mode: "multiple"
                });
                this.startSelection(context);
            },
            startSelection(context) {
                context
                    .authorize()
                    .then(() => {
                        this.imageAssets = [];
                        this.imageSrc = null;
                        return context.present();
                    })
                    .then((selection) => {
                        console.log("Selection done: " + JSON.stringify(selection));
                        this.imageSrc = this.isSingleMode && selection.length > 0 ? selection[0] : null;

                        // set the images to be loaded from the assets with optimal sizes (optimize memory usage)
                        selection.forEach(element => {
                            element.options.width = this.isSingleMode ? this.previewSize : this.thumbSize;
                            element.options.height = this.isSingleMode ? this.previewSize : this.thumbSize;
                        });

                        this.imageAssets = selection;
                    }).catch(function (e) {
                        console.log(e);
                    });
            },
            onItemLoading(args) {
                let label = args.view.getViewById("imageLabel");
                label.text = "image " + args.index;
            }
        }
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
    .fa {
        color: $accent-dark;
    }

    .info {
        font-size: 20;
    }
</style>
